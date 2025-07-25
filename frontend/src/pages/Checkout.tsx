import { useState } from 'react';
import { CreditCard, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { state, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const loadRazorpay = async () => {
  const res = await fetch("https://eggito-new.onrender.com/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: state.total,
    }),
  });

  const data = await res.json();
  const order = data.order;

  if (!order) {
    toast({ title: "Error", description: "Could not create order" });
    setIsProcessing(false);
    return;
  }

  const options = {
  key: "YOUR_RAZORPAY_KEY_ID", // ✅ Replace with your actual Key ID
  amount: order.amount,
  currency: order.currency,
  name: "Eggiito",
  description: "Order Payment",
  image: "/logo.png",
  order_id: order.id, // ✅ Must be from backend

  handler: async function (response: any) {
  console.log("Razorpay response:", response);

  const verifyRes = await fetch("https://eggito-website.onrender.com/verify-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
    }),
  });

  const result = await verifyRes.json();

  if (result.success) {
    toast({
      title: "Payment Successful!",
      description: "We’ve received your payment.",
    });

    clearCart();
    navigate("/order-success");
  } else {
    toast({
      title: "Verification Failed!",
      description: "Something went wrong. Please contact support.",
      variant: "destructive",
    });
  }
},


  prefill: {
    name: formData.name,
    contact: formData.phone,
  },

  theme: {
    color: "#6366f1",
  },
};


  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    if (formData.paymentMethod === "online") {
      await loadRazorpay();
      setIsProcessing(false);
      return;
    }

    // Simulate COD
    setTimeout(() => {
      const orderData = {
        customer: formData,
        items: state.items,
        total: state.total,
        paymentMethod: formData.paymentMethod,
        orderDate: new Date().toISOString(),
      };

      console.log("Order placed:", orderData);

      clearCart();
      setIsProcessing(false);

      toast({
        title: "Order placed successfully!",
        description:
          "Thank you! We'll connect with you on WhatsApp for confirmation and delivery.",
      });

      navigate("/order-success");
    }, 2000);
  };

  if (state.items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen font-poppins">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Enter your complete address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        placeholder="City"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  >
                    <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center space-x-3 cursor-pointer">
                        <Truck className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Cash on Delivery</p>
                          <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-4 border border-border rounded-lg">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online" className="flex items-center space-x-3 cursor-pointer">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">Online Payment</p>
                          <p className="text-sm text-muted-foreground">Pay securely with Razorpay</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {state.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-grow">
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-foreground">₹{item.offerPrice * item.quantity}</p>
                    </div>
                  ))}

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span className="text-primary">₹{state.total}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By placing this order, you agree to our terms and conditions. 
                    We'll contact you via WhatsApp for order confirmation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;