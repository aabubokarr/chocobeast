# Civitas | Art & History Museum Website

A modern, elegant museum website template featuring smooth animations, responsive design, and interactive elements. Built for art galleries, history museums, and cultural institutions.

## Features

- **Smooth Scroll Animations** - Powered by Locomotive Scroll for immersive scrolling experience
- **Interactive Sliders** - Multiple Swiper.js implementations for hero sections and galleries
- **Kinetic Slider** - Dynamic WebGL-based slider for visual impact
- **Responsive Design** - Fully responsive across all devices using Bootstrap 5
- **Modern UI/UX** - Clean, professional design with elegant typography
- **Search Functionality** - Built-in event search feature
- **Newsletter Integration** - Email subscription form
- **Multiple Page Templates** - Home, About, Exhibitions, Collections, Visit, Contact, News, and Membership pages

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with SCSS preprocessing
- **JavaScript** - Interactive features and animations
- **Bootstrap 5** - Responsive grid system
- **Swiper.js** - Touch slider library
- **Locomotive Scroll** - Smooth scrolling library
- **GSAP** - Animation library
- **Font Awesome** - Icon library
- **Fancybox** - Lightbox library for images

## Project Structure

```
wandau/
├── css/                    # Compiled CSS files
│   ├── bootstrap.min.css
│   ├── fontawesome.min.css
│   ├── fancybox.min.css
│   ├── odometer.min.css
│   ├── swiper.min.css
│   └── style.css          # Main stylesheet
├── scss/                   # SCSS source files
│   └── style.scss
├── js/                     # JavaScript files
│   ├── bootstrap.min.js
│   ├── fancybox.min.js
│   ├── gsap.min.js
│   ├── jquery.min.js
│   ├── kinetic-slider.js
│   ├── locomotive-scroll.min.js
│   ├── odometer.min.js
│   ├── scripts.js         # Main custom scripts
│   ├── ScrollTrigger.min.js
│   └── swiper.min.js
├── images/                 # Image assets
│   ├── art-slide*.jpg     # Art collection slider images
│   ├── art-thumb*.jpg     # Art thumbnails
│   ├── carousel-image*.jpg
│   ├── event*.jpg         # Event images
│   ├── icon*.png          # UI icons
│   ├── image*.jpg         # Content images
│   ├── recent-news*.jpg   # News article images
│   ├── side-imag*.jpg     # Side gallery images
│   ├── slide*_new.jpg     # Hero slider images
│   └── ...
├── fonts/                  # Custom web fonts
├── ico/                    # Favicon files
├── videos/                 # Video assets
├── index.html              # Homepage (standard slider)
├── index-kinetic.html      # Homepage (kinetic slider)
├── about.html              # About page
├── exhibitions.html        # Exhibitions listing
├── exhibition-detail.html  # Single exhibition
├── collections.html        # Collections listing
├── collection-detail.html  # Single collection
├── visit.html              # Visitor information
├── contact.html            # Contact page
├── news.html               # News listing
├── news-single.html        # Single news article
├── membership.html         # Membership page
├── LICENSE                 # License file
└── README.md              # This file
```

## Pages Overview

### Homepage (`index.html`)
- Hero slider with 3 slides
- Museum information section
- Upcoming events showcase
- Art inspiration section
- Horizontal scroll gallery
- Safety steps section
- Art collection slider
- Recent news
- Newsletter subscription

### Homepage Kinetic (`index-kinetic.html`)
- WebGL-based kinetic slider
- Similar content structure to standard homepage
- Enhanced visual effects

### About (`about.html`)
- Museum history
- Mission and values
- Team information
- Timeline of achievements

### Exhibitions (`exhibitions.html`)
- Current and upcoming exhibitions
- Exhibition grid layout
- Filter and search functionality

### Collections (`collections.html`)
- Museum collection categories
- Collection highlights
- Detailed collection views

### Visit (`visit.html`)
- Opening hours
- Admission prices
- Location and directions
- Visitor guidelines
- Accessibility information

### Contact (`contact.html`)
- Contact form
- Location map
- Contact information
- Social media links

### News (`news.html`)
- Latest museum news
- Blog articles
- Event announcements

### Membership (`membership.html`)
- Membership benefits
- Pricing tiers
- Sign-up form

## Installation & Setup

1. **Clone or Download** the project files
2. **Open in Browser** - Simply open `index.html` in a modern web browser
3. **Local Server** (recommended) - Use a local server for best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using PHP
   php -S localhost:8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
4. **Access** - Navigate to `http://localhost:8000`

## Customization

### Colors
Edit the CSS variables in `css/style.css` or SCSS files in `scss/style.scss`:
```css
:root {
  --primary-color: #c5a059;
  --secondary-color: #080808;
  --accent-color: #feed01;
}
```

### Images
Replace images in the `images/` folder with your own. Maintain the same naming convention and dimensions for best results.

### Content
Edit the HTML files directly to update:
- Text content
- Links
- Meta information
- Social media handles

### Fonts
The project uses:
- **Cinzel** - For headings and logo
- **System fonts** - For body text

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minified CSS and JavaScript files
- Optimized images (consider using WebP format)
- Lazy loading for images
- Async loading for non-critical scripts

## Credits

- **Template**: Themezinho
- **Fonts**: Google Fonts
- **Icons**: Font Awesome
- **Libraries**: Bootstrap, Swiper, GSAP, Locomotive Scroll

## License

See `LICENSE` file for details.

## Support

For questions or issues, please contact the development team or refer to the original template documentation.

---

**Version**: 1.0  
**Last Updated**: December 2025
