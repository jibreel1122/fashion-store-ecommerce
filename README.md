# Fashion Store - Modern E-commerce Platform

A complete, production-ready fashion e-commerce website built with Next.js 14, Supabase, and Tailwind CSS. Features full Arabic RTL support, admin panel, and modern UI components.

![Fashion Store](https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1ee779f6-cab1-4845-b158-b51b0003b685.png)

## 🌟 Features

### Core Functionality
- **🛍️ Complete E-commerce Experience**: Browse products, add to cart, checkout, and order tracking
- **👔 Admin Dashboard**: Full CRUD operations for products, orders, and user management
- **🌍 Multilingual Support**: English and Arabic with RTL layout switching
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🔐 Secure Authentication**: User registration, login, and role-based access control
- **💳 Mock Payment System**: Integrated checkout with order confirmation

### User Roles
- **👗 Customer**: Browse catalog, manage cart, place orders, track purchases
- **👔 Admin**: Manage products, process orders, view analytics, manage users

### Technical Features
- **⚡ Next.js 14**: App Router, Server Components, and optimized performance
- **🗄️ Supabase Backend**: PostgreSQL database, authentication, and real-time updates
- **🎨 Modern UI**: Tailwind CSS with shadcn/ui components
- **📦 TypeScript**: Full type safety and better developer experience
- **🛒 Cart Persistence**: LocalStorage integration for cart state management
- **🔍 Advanced Filtering**: Search, category, price range, and sorting options

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- Supabase account (free tier available)

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd fashion-store
npm install
```

### 2. Environment Setup
Create `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Database Setup
1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Copy and paste the contents of `database-schema.sql`
4. Run the SQL to create tables, policies, and sample data

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to see your application!

## 📊 Database Schema

### Tables
- **products**: Product catalog with variants, images, and inventory
- **orders**: Customer orders with items and shipping details
- **user_profiles**: Extended user information and preferences
- **discounts**: Promotional codes and offers

### Sample Data Included
- 6 featured products across different categories
- 2 sample discount codes (WELCOME10, SUMMER20)
- Automatic admin user creation

## 🎯 Usage Guide

### For Customers
1. **Browse Products**: Visit homepage or catalog page
2. **Filter & Search**: Use category, price, and search filters
3. **Product Details**: View images, variants, and descriptions
4. **Add to Cart**: Select size/color and add items
5. **Checkout**: Complete shipping and payment information
6. **Track Orders**: Monitor order status in dashboard

### For Admins
1. **Access Admin Panel**: Login with admin account
2. **Manage Products**: Add, edit, delete products with variants
3. **Process Orders**: Update order status and view details
4. **User Management**: View customer information and statistics
5. **Analytics**: Monitor sales, revenue, and performance

### Language Switching
- Click language toggle in navigation (English ↔ العربية)
- Layout automatically switches to RTL for Arabic
- All text content translates dynamically

## 🛠️ Development

### Project Structure
```
src/
├── app/                    # Next.js 14 App Router
│   ├── auth/              # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── catalog/           # Product catalog
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   ├── dashboard/         # User dashboard
│   └── product/[id]/      # Product details
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   └── Navigation.tsx    # Main navigation
├── contexts/             # React contexts
│   └── CartContext.tsx   # Cart state management
├── lib/                  # Utilities and configurations
│   ├── supabase.ts      # Database client and types
│   ├── i18n.ts          # Internationalization
│   └── utils.ts         # Helper functions
└── hooks/               # Custom React hooks
```

### Key Technologies
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **State Management**: React Context, localStorage
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives

### Adding New Features
1. **New Pages**: Create in `src/app/` directory
2. **Components**: Add to `src/components/`
3. **Database Changes**: Update `database-schema.sql`
4. **Types**: Extend interfaces in `src/lib/supabase.ts`
5. **Translations**: Add to `src/lib/i18n.ts`

## 🚀 Deployment

### Recommended Hosting (Free Tiers Available)

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
- Automatic deployments from Git
- Built-in Next.js optimization
- Free SSL and CDN

#### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

#### Railway
```bash
# Connect GitHub repo to Railway
# Set environment variables
# Deploy automatically
```

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_key
```

### Pre-deployment Checklist
- [ ] Update Supabase URL and keys
- [ ] Test all authentication flows
- [ ] Verify admin panel functionality
- [ ] Test mobile responsiveness
- [ ] Check Arabic RTL layout
- [ ] Validate all forms and error handling

## 🧪 Testing

### Manual Testing Checklist

#### Authentication
```bash
# Test user registration
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","name":"Test User"}'

# Test user login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

#### Product Management (Admin)
- Create, edit, delete products
- Upload product images
- Manage inventory and variants
- Set featured products

#### Order Processing
- Add items to cart
- Complete checkout process
- Update order status (admin)
- View order history

#### Internationalization
- Switch between English and Arabic
- Verify RTL layout in Arabic mode
- Test all translated content

### Browser Testing
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration

### Supabase Setup Details

#### Row Level Security (RLS)
- Products: Public read, admin write
- Orders: User owns, admin manages
- Profiles: User owns, admin views all

#### Storage Buckets
```sql
-- Create storage bucket for product images
INSERT INTO storage.buckets (id, name, public) VALUES ('products', 'products', true);

-- Allow public access to product images
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'products');
```

#### Email Templates
Customize in Supabase Dashboard > Authentication > Email Templates:
- Welcome email
- Password reset
- Email confirmation

### Customization Options

#### Styling
- Update `tailwind.config.js` for custom colors
- Modify `src/app/globals.css` for global styles
- Customize components in `src/components/ui/`

#### Languages
- Add new languages in `src/lib/i18n.ts`
- Update locale configuration in `next.config.ts`
- Add RTL support for new languages

#### Payment Integration
Replace mock payment in `src/app/checkout/page.tsx`:
```typescript
// Replace with real payment processor
const paymentResult = await processPayment({
  amount: total,
  currency: 'USD',
  paymentMethod: formData.paymentMethod
});
```

## 📈 Performance Optimization

### Built-in Optimizations
- Next.js Image optimization
- Automatic code splitting
- Server-side rendering
- Static generation for product pages

### Recommended Improvements
- Implement Redis caching for product data
- Add image CDN (Cloudinary, ImageKit)
- Enable Supabase connection pooling
- Implement search indexing (Algolia, ElasticSearch)

## 🐛 Troubleshooting

### Common Issues

#### Supabase Connection Errors
```bash
# Check environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Verify Supabase project status
# Check RLS policies in Supabase dashboard
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check TypeScript errors
npx tsc --noEmit
```

#### Authentication Issues
- Verify email confirmation in Supabase Auth settings
- Check redirect URLs in Supabase dashboard
- Ensure user_profiles trigger is active

### Getting Help
- Check Supabase documentation: [supabase.com/docs](https://supabase.com/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: support@fashionstore.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues](https://github.com/your-repo/issues)

---

**Built with ❤️ using Next.js, Supabase, and Tailwind CSS**

*Ready for production deployment with free hosting options!*
