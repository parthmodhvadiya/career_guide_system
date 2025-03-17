import React from "react";
import { TextField, Button } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold">CareerGuide</h2>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 space-y-2">
              <a href="https://linkedin.com">LinkedIn</a><br />
              <a href="https://twitter.com">Twitter</a><br />
              <a href="https://instagram.com">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <TextField
              label="Enter your email"
              
              fullWidth
              className="bg-white rounded"
              sx={{marginTop:2}}
            />
            <Button variant="contained" color="primary" sx={{marginTop:2}}>
              Subscribe
            </Button>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2023 CareerGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;