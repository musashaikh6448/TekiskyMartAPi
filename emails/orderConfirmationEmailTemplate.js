const orderConfirmationEmailTemplate = (order) => {
    const productList = order.products.map((product) => {
      return `
        <div style="display: flex; align-items: center; padding: 10px 0; border-bottom: 1px solid #eee;">
          <img src="${product.imageUrl}" alt="${product.name}" style="width: 100px; height: 100px; object-fit: cover; margin-right: 15px;"/>
          <div>
            <h4 style="margin: 0; font-size: 18px; color: #333;">${product.name}</h4>
            <p style="margin: 5px 0 0; font-size: 14px; color: #555;">Quantity: ${product.quantity}</p>
            <p style="margin: 5px 0 0; font-size: 14px; color: #555;">Price: ₹${product.price}</p>
          </div>
        </div>
      `;
    }).join('');
  
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #4CAF50; text-align: center;">Order Confirmation - ${order.orderId}</h2>
        <p style="font-size: 16px; color: #333;">Thank you for your order, <strong>${order.customerName}</strong>!</p>
        <p style="font-size: 14px; color: #555;">Here are the details of your purchase:</p>
        
        ${productList}
  
        <div style="padding: 15px 0;">
          <p style="font-size: 16px; color: #333;"><strong>Total Amount:</strong> ₹${order.totalAmount}</p>
          <p style="font-size: 16px; color: #333;"><strong>Order Status:</strong> ${order.orderStatus}</p>
        </div>
  
        <h3 style="color: #4CAF50; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Shipping Information</h3>
        <ul style="list-style: none; padding: 0; font-size: 14px; color: #555;">
          <li><strong>Address:</strong> ${order.address}, ${order.landmark}, ${order.pincode}</li>
          <li><strong>Mobile:</strong> ${order.mobileNumber}</li>
        </ul>
  
        <p style="text-align: center; font-size: 14px; color: #888; padding-top: 20px;">Thank you for shopping with us!</p>
      </div>
    `;
  };
  
  export default orderConfirmationEmailTemplate;
                                            