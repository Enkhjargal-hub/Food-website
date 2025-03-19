import { UserModel } from "../../models/user-schema.js";
import { authorize } from "../../middleware/authorize.js";

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { name, email },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" }); 
        }

        res.status(200).json({ 
            message: "User updated successfully",
            user: {
                id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                updatedAt: updatedUser.updatedAt
            }
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Server error",
            error: error.message
        });
    }
};