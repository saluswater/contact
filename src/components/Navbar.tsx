'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const healthProblems = [
  { 
    href: '/hair', 
    labelKey: 'nav.hair',
    titleKey: 'nav.hair.title',
    descKey: 'nav.hair.desc'
  },
  { 
    href: '/skin', 
    labelKey: 'nav.skin',
    titleKey: 'nav.skin.title', 
    descKey: 'nav.skin.desc'
  },
  { 
    href: '/kidneys', 
    labelKey: 'nav.kidneys',
    titleKey: 'nav.kidneys.title',
    descKey: 'nav.kidneys.desc'
  },
  { 
    href: '/cancer', 
    labelKey: 'nav.cancer',
    titleKey: 'nav.cancer.title',
    descKey: 'nav.cancer.desc'
  },
]

export function Navbar() {
  const pathname = usePathname()
  const { language, setLanguage, t, getWhatsAppNumber } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const getUrlWithLanguage = (href: string) => {
    if (language === 'en') {
      return `${href}?lang=en`
    }
    return href // Portuguese is default, no param needed
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <nav ref={mobileMenuRef} className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={getUrlWithLanguage("/")} className="flex items-center">
            <Image
              src="/logo-small.webp"
              alt="Salus Water"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {healthProblems.map((problem) => (
              <Link
                key={problem.href}
                href={getUrlWithLanguage(problem.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === problem.href
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {t(problem.labelKey)}
              </Link>
            ))}
          </div>

          {/* Mobile Right - Language Toggle + Menu Hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'PT' : 'EN'}</span>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'PT' : 'EN'}</span>
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center space-x-1 border-green-500 text-green-700 hover:bg-green-50 hover:border-green-600 min-h-[44px] px-4 font-semibold"
              asChild
            >
              <a
                href={`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(t('whatsapp.home'))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('nav.whatsapp')}</span>
              </a>
            </Button>
            <Button
              size="sm"  
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white min-h-[44px] px-4 font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              asChild
            >
              <a href={`tel:${t('nav.phone')}`}>
                <Phone className="w-4 h-4 mr-1" />
                {t('nav.contact')}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {healthProblems.map((problem) => (
                <Link
                  key={problem.href}
                  href={getUrlWithLanguage(problem.href)}
                  className={`block p-4 rounded-lg transition-colors ${
                    pathname === problem.href
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="text-sm font-medium">
                    {t(problem.labelKey)}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {t(problem.descKey)}
                  </div>
                </Link>
              ))}
              <div className="border-t pt-4 mt-4 space-y-2">
                <a
                  href={`https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(t('whatsapp.home'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-green-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">
                    {t('nav.whatsapp')}
                  </span>
                </a>
                <a 
                  href={`tel:${t('nav.phone')}`}
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-blue-50 transition-colors w-full text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">
                    {t('nav.contact')}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}