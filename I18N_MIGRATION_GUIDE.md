# 🌍 i18n Migration Guide - URL-Based Language Routing

## ✅ What's Been Completed

I've created the foundation for proper i18n routing with URL-based language switching and dynamic SEO tags:

### Files Created/Updated:
1. ✅ **`lib/i18n.ts`** - i18n configuration, locale types, and SEO translations
2. ✅ **`middleware.ts`** - Language detection and URL redirection
3. ✅ **`context/LanguageContext.tsx`** - Updated to sync with URL params
4. ✅ **`app/providers.tsx`** - Updated to accept initialLocale
5. ✅ **`app/layout.tsx`** - Root layout with required `<html>` and `<body>` tags + CSS imports
6. ✅ **`app/[lang]/layout.tsx`** - Dynamic metadata generation (no html/body tags)

---

## 🚨 Manual Migration Required

You need to restructure your `app` directory to use the `[lang]` dynamic segment. Here's exactly what to do:

### Step 1: Move Homepage Files

**Move these files:**
```bash
# From
app/page.tsx

# To  
app/[lang]/page.tsx
```

**Update the file to accept lang param:**

```typescript
// app/[lang]/page.tsx
import Hero from '../../components/Hero'
import FeaturedWork from '../../sections/FeaturedWork'
import UIShots from '../../sections/UIShots'
import Footer from '../../sections/Footer'
import SocialDock from '../../components/SocialDock'

export default function Home({ params }: { params: { lang: 'en' | 'ru' } }) {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <UIShots />
      <Footer />
      <SocialDock />
    </>
  )
}
```

---

### Step 2: Move About Page

**Move these files:**
```bash
# From
app/about/page.tsx
app/about/layout.tsx

# To
app/[lang]/about/page.tsx  
app/[lang]/about/layout.tsx
```

**Update `app/[lang]/about/layout.tsx` for dynamic SEO:**

```typescript
import { Metadata } from 'next'
import { Locale, generatePageMetadata } from '../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'about')
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
```

**Update `app/[lang]/about/page.tsx` to accept lang:**

```typescript
// At the top, update the function signature:
export default function About({ params }: { params: { lang: 'en' | 'ru' } }) {
  // Rest of your component code stays the same
  // The LanguageContext will automatically sync with params.lang
}
```

---

### Step 3: Move Case Study Pages

**Move these directories:**
```bash
# From
app/case/[slug]/
app/case/toyota/
app/case/toyota-inventory/

# To
app/[lang]/case/[slug]/
app/[lang]/case/toyota/
app/[lang]/case/toyota-inventory/
```

**Update each case page to accept lang param:**

```typescript
// Example: app/[lang]/case/toyota/page.tsx
export default function ToyotaCasePage({ 
  params 
}: { 
  params: { lang: 'en' | 'ru' } 
}) {
  const { t } = useLanguage()
  // Rest of component...
}
```

**Update case layouts for dynamic SEO:**

```typescript
// Example: app/[lang]/case/toyota/layout.tsx
import { Metadata } from 'next'
import { Locale, generatePageMetadata } from '../../../../lib/i18n'

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Locale } 
}): Promise<Metadata> {
  return generatePageMetadata(params.lang, 'toyota')
}

export default function ToyotaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
```

---

### Step 4: Update Navigation Links

Update all internal links to include language prefix:

**Before:**
```typescript
<Link href="/about">About</Link>
<Link href="/case/toyota">Toyota</Link>
```

**After:**
```typescript
import { useLanguage } from '../context/LanguageContext'

function MyComponent() {
  const { locale } = useLanguage()
  
  return (
    <>
      <Link href={`/${locale}/about`}>About</Link>
      <Link href={`/${locale}/case/toyota`}>Toyota</Link>
    </>
  )
}
```

**Or use router.push in Hero.tsx and other components:**

```typescript
const { locale } = useLanguage()
<Link href={`/${locale}/about`} className="nav-button">
```

---

### Step 5: Update sitemap.ts

```typescript
// app/sitemap.ts
import { i18n } from '../lib/i18n'

export default function sitemap() {
  const routes = ['', '/about'] // Add all your routes
  
  const sitemapEntries = i18n.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://asilbek.design/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }))
  )
  
  return sitemapEntries
}
```

---

## 🎯 How It Works After Migration

### URL Structure:
- `/` → Redirects to `/en` (default locale)
- `/en` → English homepage
- `/ru` → Russian homepage
- `/en/about` → English about page
- `/ru/about` → Russian about page
- `/en/case/toyota` → English Toyota case
- `/ru/case/toyota` → Russian Toyota case

### Language Switching:
When users click the language toggle button:
1. URL automatically updates (e.g., `/en/about` → `/ru/about`)
2. Content changes to selected language
3. SEO meta tags update automatically
4. Cookie is set to remember preference

### SEO Benefits:
- ✅ Proper hreflang tags for Google
- ✅ Language-specific title and description
- ✅ Canonical URLs per language
- ✅ Open Graph tags in correct language
- ✅ Clean, indexable URLs

---

## 🧪 Testing After Migration

1. **Test Language Switching:**
   - Visit `http://localhost:3000`
   - Should redirect to `/en`
   - Click language toggle → Should go to `/ru`
   - Toggle back → Should go to `/en`

2. **Test Direct URLs:**
   - Visit `/en` → English content
   - Visit `/ru` → Russian content
   - Visit `/en/about` → English about page
   - Visit `/ru/about` → Russian about page

3. **Test SEO Tags:**
   - View page source on `/en` and `/ru`
   - Verify titles are different
   - Check hreflang tags are present
   - Verify canonical URLs

4. **Test Navigation:**
   - All internal links should include locale
   - Back/forward buttons should work
   - Language preference should persist (cookie)

---

## 🔧 Troubleshooting

**Issue: "Module not found" errors**
- Make sure all imports use correct relative paths after moving files
- Example: `../../components/Hero` instead of `../components/Hero`

**Issue: Language not switching**
- Check that you're using `locale` from `useLanguage()` in links
- Verify middleware.ts is in the root directory

**Issue: SEO tags not changing**
- Ensure `generateMetadata` is exported from layout.tsx
- Check that `params.lang` is being passed correctly

**Issue: Redirect loop**
- Check middleware matcher config
- Verify i18n.locales array is correct

---

## 📝 Summary

**What You Still Need To Do:**
1. Move `app/page.tsx` → `app/[lang]/page.tsx`
2. Move `app/about/*` → `app/[lang]/about/*`
3. Move `app/case/*` → `app/[lang]/case/*`
4. Update all internal `<Link>` components to include `/${locale}/`
5. Update sitemap.ts to include both locales
6. Test everything!

**Time Estimate:** 30-45 minutes

**Benefits:**
- ✅ Clean, SEO-friendly URLs
- ✅ Language-specific meta tags
- ✅ Better Google indexing
- ✅ Proper hreflang implementation
- ✅ URL-based language persistence

Good luck! 🚀

