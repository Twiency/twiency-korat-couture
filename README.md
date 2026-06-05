# Twiency Korat Couture 👗

Luxury Ethnic Wear • Timeless Elegance

A premium boutique fashion website built using **GitHub Pages** for showcasing and selling luxury lehengas and designer dresses.

This website is designed for **Twiency Korat Couture** and includes:

* Premium luxury UI
* Mobile responsive design
* WhatsApp ordering
* Dress popup modal
* Search & category filter
* Future unlimited dress support
* SEO-ready structure for Gujarat audience
* Free hosting using GitHub Pages

---

# Website URL

Live Website:

```text
https://twiencykorat.github.io
```

---

# Contact Details

**Phone:** 8320104643

**Email:** [trkorat76@gmail.com](mailto:trkorat76@gmail.com)

---

# Website Features

### Premium Luxury UI

Elegant boutique-style design suitable for luxury ethnic wear.

### WhatsApp Ordering

Customers can directly inquire and place dress orders through WhatsApp.

### Search Feature

Users can search dresses by name.

### Category Filters

Currently supported:

* Bridal
* Reception
* Party Wear
* Festive

### Dress Popup Modal

Click on dress image to see:

* Large image preview
* Dress name
* Price
* Description
* WhatsApp order button

### Mobile Responsive

Optimized for:

* Mobile
* Tablet
* Desktop

### SEO Ready

Optimized for Gujarat-based searches:

Example keywords:

* Designer Lehenga Gujarat
* Bridal Lehenga Gujarat
* Luxury Lehenga Online
* Reception Wear Gujarat

---

# Technology Used

Frontend:

* HTML
* CSS
* JavaScript

Hosting:

* GitHub Pages

No backend required.

No database required.

100% free hosting.

---

# Repository Structure

```text
twiency-korat-couture/
│── index.html
│── style.css
│── script.js
│── data.js
│── README.md
│── dresses/
│      ├── dress1.jpg
│      ├── dress2.jpg
```

---

# Important Files

## index.html

Contains:

* Website layout
* Hero section
* Navbar
* Contact section
* About section
* Modal popup structure

---

## style.css

Contains:

* Premium UI styling
* Mobile responsiveness
* Hero section design
* Product card design
* WhatsApp button styling

---

## script.js

Contains:

* Dress rendering
* Search functionality
* Category filtering
* Modal popup logic
* WhatsApp order logic

---

## data.js

Contains all dress information.

This is the main file for managing dresses.

---

# How To Add New Dress (Future)

Adding new dresses is very simple.

## Step 1: Upload Dress Image

Go to:

```text
dresses/
```

Upload image.

Example:

```text
dress3.jpg
```

Recommended naming:

```text
dress3.jpg
dress4.jpg
dress5.jpg
```

Use lowercase only.

Avoid spaces.

Correct:

```text
dress3.jpg
```

Wrong:

```text
Dress 3.JPG
whatsapp image.jpg
```

---

## Step 2: Update data.js

Open:

```text
data.js
```

Add this block at the bottom.

Example:

```javascript
,
{
name:
"Royal Bridal Lehenga",

category:
"Bridal",

price:
"₹28,000",

description:
"Luxury handcrafted bridal couture lehenga for grand celebrations.",

images: [
"dresses/dress3.jpg"
]
}
```

Save and commit changes.

Website updates automatically.

---

# Example Categories

Supported categories:

```text
Bridal
Reception
Party Wear
Festive
```

You can add new categories anytime.

Example:

```text
Engagement
Wedding Collection
Designer Wear
```

---

# How To Change Price

Open:

```text
data.js
```

Find:

```javascript
price:
"₹20,000"
```

Update value.

Example:

```javascript
price:
"₹25,000"
```

Commit changes.

Done.

---

# How To Change Description

Open:

```text
data.js
```

Find:

```javascript
description:
"Luxury rose-toned couture lehenga crafted for elegant celebrations."
```

Update description.

Commit changes.

---

# How To Change Contact Information

## Phone Number

Search inside:

```text
index.html
script.js
```

Replace:

```text
8320104643
```

with new number.

---

## Email

Search inside:

```text
index.html
```

Replace:

```text
trkorat76@gmail.com
```

---

# How To Change Hero Text

Open:

```text
index.html
```

Find:

```html
Crafted for Elegant Celebrations
```

Change to any text.

Example:

```text
Luxury Fashion For Every Celebration
```

---

# GitHub Pages Deployment

Go to:

### Repository → Settings → Pages

Settings:

### Branch

```text
master
```

### Folder

```text
/(root)
```

Save.

GitHub automatically deploys website.

Website URL:

```text
https://twiencykorat.github.io
```

---

# Troubleshooting

## Images Not Showing

Check:

### Correct folder

```text
dresses/
```

### Correct image name

Correct:

```text
dress1.jpg
```

Wrong:

```text
Dress1.JPG
IMG_123.jpg
```

GitHub is case-sensitive.

---

## CSS Not Updating

Hard refresh browser:

### Windows

```text
CTRL + SHIFT + R
```

### Mac

```text
CMD + SHIFT + R
```

---

## Website Not Updating

Wait 1–3 minutes after commit.

GitHub Pages redeploys automatically.

---

# Future Improvements

Possible future enhancements:

* Instagram Integration
* Custom Domain
* Google Analytics
* Customer Reviews
* Multiple Images Per Dress
* Dress Gallery Slider
* Payment Integration
* Wishlist
* Razorpay
* Order Form
* SEO Improvements

---

# Maintained By

Twiency Korat Couture

Luxury Ethnic Wear • Gujarat
