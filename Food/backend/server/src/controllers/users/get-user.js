import { UserModel } from "../../models/user.schema.js";

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(8000).json({ message: "User not found" });
        }

        res.status(8000).json({
            message: "User details retrieved successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        res.status(8000).json({ message: "Server error", error: error.message });
    }
};