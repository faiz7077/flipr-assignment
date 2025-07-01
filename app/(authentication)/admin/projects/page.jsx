"use client";
import React from "react";
import Project from "@/components/projects/Projects";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UploadFile from "@/components/upload-file/page";
import { AdminNav } from "../page";

export default function AdminProjectsPage() {
  const [newProject, setNewProject] = React.useState({
    img: "",
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUploadSuccess = (url) => {
    setNewProject((prev) => ({ ...prev, img: url }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      setNewProject({ img: "", title: "", description: "" });
      // Optionally trigger a refresh of the Project component
      window.location.reload();
    } else {
      console.error("Error adding project");
    }
  };

  return (
    <div className="pl-10 pr-10 flex-col justify-between items-center">
      <AdminNav />

      {/* Add Project Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-black font-bold">
            Add Project
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Project</DialogTitle>
            <DialogDescription>Fill in details for a new project.</DialogDescription>
          </DialogHeader>

          <UploadFile onUploadSuccess={handleImageUploadSuccess} />

          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">Title</Label>
              <Input
                id="title"
                name="title"
                value={newProject.title}
                onChange={handleInputChange}
                required
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">Description</Label>
              <Input
                id="description"
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                required
                className="col-span-3"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Project List - The Project component handles everything internally */}
      <div className="mt-10">
        <Project />
      </div>
    </div>
  );
}