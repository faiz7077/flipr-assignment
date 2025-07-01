"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Client } from '@/components/clients/Clients';
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
import UploadFile from '@/components/upload-file/page';
import { AdminNav } from '../page';
import "./clients.css";

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newClient, setNewClient] = useState({
    img: '',
    name: '',
    description: '',
    designation: ''
  });

  // Fetch clients function
  const fetchClients = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://flipr-assignm.onrender.com/api/clients");
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setClients(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching clients:', err);
      setError('Failed to load clients');
      setClients([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load clients on component mount
  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setNewClient(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Handle image upload success
  const handleImageUploadSuccess = useCallback((url) => {
    setNewClient(prev => ({
      ...prev,
      img: url
    }));
  }, []);

  // Reset form
  const resetForm = useCallback(() => {
    setNewClient({
      img: '',
      name: '',
      description: '',
      designation: ''
    });
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return; // Prevent double submission
    
    // Validate required fields
    if (!newClient.name?.trim() || !newClient.description?.trim() || !newClient.designation?.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);

      const response = await fetch('https://flipr-assignm.onrender.com/api/clients', {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newClient,
          name: newClient.name.trim(),
          description: newClient.description.trim(),
          designation: newClient.designation.trim()
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const createdClient = await response.json();
      
      // Update clients list with new client
      setClients(prev => [...prev, createdClient]);
      
      // Reset form and close dialog
      resetForm();
      setIsDialogOpen(false);
      
    } catch (err) {
      console.error('Error adding client:', err);
      setError(err.message || 'Failed to add client');
    } finally {
      setIsSubmitting(false);
    }
  }, [newClient, isSubmitting, resetForm]);

  // Get correct image URL helper
  const getImageUrl = useCallback((imgPath) => {
    if (!imgPath || typeof imgPath !== 'string' || imgPath.trim() === "") {
      return "";
    }
    
    // If it's already a full URL, return as is
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) {
      return imgPath;
    }
    
    // If it's a file path starting with /storage/, prepend localhost URL
    if (imgPath.startsWith('/storage/')) {
      return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://flipr-assignm.onrender.com'}${imgPath}`;
    }
    
    // If it's a base64 string, return as data URL
    if (imgPath.includes('base64') || imgPath.startsWith('data:')) {
      return imgPath;
    }
    
    // Default case: assume it's a storage path
    return `${process.env.NEXT_PUBLIC_BASE_URL || 'https://flipr-assignm.onrender.com'}/storage/${imgPath}`;
  }, []);

  // Handle dialog open/close
  const handleDialogOpenChange = useCallback((open) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
      setError(null);
    }
  }, [resetForm]);

  // Handle image error
  const handleImageError = useCallback((e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.style.display = 'none';
    const fallback = e.target.nextSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  }, []);

  return (
    <div className='pl-10 pr-10 flex-col justify-between items-center'>
      <AdminNav />
      
      <Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
        <DialogTrigger asChild>
          <Button variant="outline" className="border-black font-bold">
            Add Client
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Client</DialogTitle>
            <DialogDescription>
              Add a new client to your list
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Upload File Component */}
          <UploadFile onUploadSuccess={handleImageUploadSuccess} />

          {/* Client Details Form */}
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={newClient.name}
                onChange={handleInputChange}
                required
                className="col-span-3"
                disabled={isSubmitting}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description *
              </Label>
              <Input
                id="description"
                name="description"
                value={newClient.description}
                onChange={handleInputChange}
                required
                className="col-span-3"
                disabled={isSubmitting}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="designation" className="text-right">
                Designation *
              </Label>
              <Input
                id="designation"
                name="designation"
                value={newClient.designation}
                onChange={handleInputChange}
                required
                className="col-span-3"
                disabled={isSubmitting}
              />
            </div>
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => handleDialogOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Save changes'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="pl-10 pr-10 bg-gray-100 rounded-3xl py-8 w-full min-h-screen">
        <h1 className='p-10 flex flex-col items-center text-3xl font-bold text-blue-500'>
          Clients
        </h1>
        <p className="text-xl flex flex-col items-center">
          Here is a list of all the clients
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="text-gray-500">Loading clients...</div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex justify-center items-center py-8">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
              <Button 
                onClick={fetchClients} 
                className="ml-4" 
                variant="outline" 
                size="sm"
              >
                Retry
              </Button>
            </div>
          </div>
        )}

        {/* Clients List */}
        {!loading && !error && (
          <div className="flex animate-scroll space-x-6 px-4 py-4">
            {clients.length === 0 ? (
              <div className="w-full text-center py-8 text-gray-500">
                No clients found. Add your first client!
              </div>
            ) : (
              clients.map((client, index) => {
                const imageUrl = getImageUrl(client.img);
                
                return (
                  <div
                    key={client.id || `client-${index}`}
                    className="flex-shrink-0 w-60 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white"
                  >
                    {/* Image Section with Circle */}
                    <div className="w-full h-40 flex justify-center items-center bg-gray-200">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={client.name || "Client"}
                          className="w-20 h-20 object-cover rounded-full"
                          onError={handleImageError}
                        />
                      )}
                      
                      {/* Fallback placeholder */}
                      <div 
                        className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs"
                        style={{ display: imageUrl ? 'none' : 'flex' }}
                      >
                        No Img
                      </div>
                    </div>

                    {/* Client Details */}
                    <div className="p-4 bg-white">
                      <h3 className="text-lg font-semibold text-blue-600">
                        {client.name || "N/A"}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {client.designation || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        {client.description || "No description provided."}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>  
  );
}