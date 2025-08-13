# 🔑 Admin Panel Access Guide

## Quick Access Steps

### **Step 1: Set up Real Supabase Database**

1. **Create Supabase Account**: Go to [supabase.com](https://supabase.com) (free tier available)
2. **Create New Project**: Click "New Project" and set it up
3. **Get Credentials**: Go to Settings > API and copy:
   - Project URL (looks like: `https://abcdefgh.supabase.co`)
   - Anon public key (long string starting with `eyJ...`)

### **Step 2: Update Environment Variables**
Replace the demo values in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### **Step 3: Set up Database Schema**
1. Go to Supabase Dashboard > SQL Editor
2. Copy the entire contents of `database-schema.sql` file
3. Paste and click "Run" - this creates all tables and sample data

### **Step 4: Create Admin User**

#### **Method A: Register + Manual Admin Role**
1. Visit `http://localhost:8000/auth/register`
2. Create account with your email
3. Go to Supabase Dashboard > Table Editor > `user_profiles`
4. Find your user row and change `role` from `customer` to `admin`
5. Refresh the website and you'll see "Admin" in navigation

#### **Method B: SQL Admin Creation**
Run this in Supabase SQL Editor (replace with your email):
```sql
-- Insert admin user profile (replace email with yours)
INSERT INTO auth.users (
  id, 
  email, 
  encrypted_password, 
  email_confirmed_at, 
  created_at, 
  updated_at
) VALUES (
  gen_random_uuid(),
  'admin@fashionstore.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now()
);

-- Create admin profile
INSERT INTO user_profiles (
  id,
  email,
  name,
  role,
  language
) VALUES (
  (SELECT id FROM auth.users WHERE email = 'admin@fashionstore.com'),
  'admin@fashionstore.com',
  'Admin User',
  'admin',
  'en'
);
```

### **Step 5: Access Admin Panel**
1. **Login**: Go to `http://localhost:8000/auth/login`
2. **Use Admin Credentials**: 
   - Email: `admin@fashionstore.com`
   - Password: `admin123`
3. **Access Admin**: You'll see "Admin" button in navigation
4. **Admin URL**: Direct access at `http://localhost:8000/admin`

## 🎯 **Admin Panel Features**

Once logged in as admin, you can:

### **📊 Overview Dashboard**
- Total revenue tracking
- Order statistics
- Customer metrics
- Recent orders overview

### **🛍️ Product Management**
- ✅ Add new products with images
- ✅ Edit existing products
- ✅ Delete products
- ✅ Manage inventory and stock
- ✅ Set featured products
- ✅ Configure variants (sizes, colors)

### **📦 Order Management**
- ✅ View all customer orders
- ✅ Update order status (pending → processing → shipped → delivered)
- ✅ View order details and customer info
- ✅ Track order history

### **👥 User Management**
- ✅ View all registered customers
- ✅ See customer statistics
- ✅ Monitor user activity
- ✅ View customer order history

## 🚨 **Troubleshooting**

### **"Access Denied" Error**
- Make sure your user role is set to `admin` in the database
- Check Supabase Table Editor > user_profiles > your user > role column

### **"Admin" Button Not Showing**
- Refresh the page after changing role to admin
- Clear browser cache and cookies
- Check browser console for any errors

### **Database Connection Issues**
- Verify Supabase URL and key are correct in `.env.local`
- Restart the development server: `npm run dev`
- Check Supabase project is active and not paused

## 🎉 **Demo Admin Account**

For quick testing, use the pre-created admin account:
- **Email**: `admin@fashionstore.com`
- **Password**: `admin123`

This account is created automatically when you run the database schema!

## 📱 **Admin Panel Screenshots**

The admin panel includes:
- Modern dashboard with analytics
- Product management with image upload
- Order processing workflow
- User management interface
- Responsive design for mobile admin access

---

**Need help?** The admin panel is fully functional and ready to manage your fashion store!
