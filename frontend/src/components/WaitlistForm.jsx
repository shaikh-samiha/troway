import React, { useState } from "react";
import { sendWaitlist } from "../api";
import { Link } from "react-router-dom";

export default function WaitlistForm(){
  const [form,setForm]=useState({name:"",email:"",phone:"",organization:""});
  const [status,setStatus]=useState("");
  const handle = async (e)=>{
    e.preventDefault();
    setStatus("loading");
    try {
      await sendWaitlist(form);
      setStatus("success");
      setForm({name:"",email:"",phone:"",organization:""});
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link to="/" className="text-green-600 mb-4 inline-block">← Back to Home</Link>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h1 className="text-2xl font-bold mb-6">Join the waitlist</h1>
          <form onSubmit={handle} className="space-y-4">
            <input className="w-full border p-3 rounded" placeholder="Enter your full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/>
            <input className="w-full border p-3 rounded" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/>
            <input className="w-full border p-3 rounded" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
            <input className="w-full border p-3 rounded" placeholder="Organization (optional)" value={form.organization} onChange={e=>setForm({...form,organization:e.target.value})}/>
            <button className="w-full bg-trowayGreen text-white py-3 rounded">{status==="loading"?"Joining...":"Join the Waitlist"}</button>
            {status==="success" && <p className="text-green-600 text-center">Thanks — we’ll be in touch!</p>}
            {status==="error" && <p className="text-red-600 text-center">Oops — try again later.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
