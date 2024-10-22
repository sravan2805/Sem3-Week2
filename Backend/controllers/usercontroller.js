import usermodel from "../models/usermodel.js";

const addtocart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;
        const userData = await usermodel.findById(userId);

        const cartData = userData.cartData || {}; 

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await usermodel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updatetocart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;
        const userData = await usermodel.findById(userId);

        let cartData = userData.cartData || {}; 

        if (cartData[itemId] && cartData[itemId][size] !== undefined) {
            cartData[itemId][size] = quantity;
        }

        await usermodel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Cart Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const getusercart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await usermodel.findById(userId);

        let cartData = userData.cartData || {}; 

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addtocart, updatetocart, getusercart };