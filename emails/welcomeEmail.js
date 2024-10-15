export const welcomeEmail = (firstname) => {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; background-color: #f9f9f9;">
        <div style="text-align: center; padding-bottom: 20px;">
          <img src="https://tekisky.com/assets/WhatsApp_Image_2024-04-30_at_12.39.09_86de1ffc-removebg-preview-2SydUlQw.png" alt="Tekisky Mart Logo" style="max-width: 150px;"/>
        </div>
  
        <div style="text-align: center; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #333;">Welcome to Tekisky Mart, ${firstname}!</h1>
          <p style="color: #555; font-size: 16px; line-height: 1.5;">
            We're thrilled to have you join our shopping community! At Tekisky Mart, you'll discover a wide range of products, exclusive deals, and the latest trends in shopping.
            We are committed to providing you with the best shopping experience possible.
          </p>
  
          <p style="color: #555; font-size: 16px; font-weight: bold;">Start shopping now and experience the difference!</p>
  
          <a href="https://tekiskymart.com" style="display: inline-block; padding: 12px 20px; background-color: #28a745; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; margin-top: 20px;">
            Visit Tekisky Mart
          </a>
        </div>
  
        <div style="text-align: center; padding: 20px;">
          <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg" alt="Shopping" style="max-width: 100%; border-radius: 10px;"/>
        </div>
  
        <footer style="text-align: center; padding-top: 20px; color: #888; font-size: 14px;">
          <p>Thank you for choosing Tekisky Mart. We can't wait to see you shop with us!</p>
          <p style="margin: 0;">&copy; 2024 Tekisky Mart. All rights reserved.</p>
        </footer>
      </div>
    `;
  };
  