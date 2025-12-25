# Flipkart Clone

A robust React Native application replicating the core shopping experience of Flipkart. This project demonstrates complex UI/UX implementation, navigation patterns, and state management.

## 📱 Features

### Core Shopping Experience
- **Home Screen**: Dynamic product listings, categorized views, and promotional banners.
- **Product Details**: Rich product information with images, pricing, and ratings.
- **Shopping Cart**: Manage items, view price breakdowns, and apply discounts.

### Navigation & Discovery
- **Categories**: Browse products via a comprehensive sidebar navigation.
- **Account**: User profile management including Orders, Wishlist, and Settings.
- **Responsive Search**: Easy product discovery.

### Enhanced Checkout Flow
- **Delivery Address**: View and edit delivery details directly during checkout.
- **Payment Options**:
  - **UPI Integration**: 
    - **Apps**: Deep integration with GPay, PhonePe, Paytm (UI simulation).
    - **Collect**: Verify and pay via UPI ID.
  - **Credit/Debit Cards**: Secure input fields for card details aligned with RBI guidelines.
  - **Cash on Delivery**: Captcha verification for order confirmation.

## 🛠 Tech Stack
- **Framework**: React Native (CLI)
- **Language**: TypeScript
- **Navigation**: React Navigation (Stack & Bottom Tabs)
- **Icons**: React Native Vector Icons (MaterialCommunityIcons)
- **UI Styling**: Custom StyleSheet

## 🚀 Getting Started

### Prerequisites
- Node.js > 12
- React Native environment setup (Android Studio / Xcode)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FlipKartClone
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Pods (iOS only)**
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

**Android**:
```bash
npm run android
```

**iOS**:
```bash
npm run ios
```

## 📸 Screenshots
*(Add screenshots of Home, Cart, and Checkout screens here)*
