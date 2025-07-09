
# Razorpay Integration
- Create Razorpay Account: https://dashboard.razorpay.com/
- Go to Settings > API Keys > Generate Key
- Add to .env:
  RAZORPAY_KEY_ID=xxxx
  RAZORPAY_SECRET_KEY=yyyy
- Client calls `/api/create-order` to start payment
