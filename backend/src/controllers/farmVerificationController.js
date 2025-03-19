import FarmVerification from "../models/farmVerificationModel.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Upload Farm Verification Data
export const uploadFarmVerification = async (req, res) => {
    const { farmerId, description} = req.body;

    // Ensure required data is provided
    if (!farmerId || !description) {
        return res.status(400).json({ message: "All required fields must be provided." });
    }

    try {
        // Upload images to Cloudinary
        const imageUrls = await Promise.all(
            (req.files["images"] || []).map(file => uploadOnCloudinary(file.path).then(res => res?.url))
        );

        // Upload videos to Cloudinary
        const videoUrls = await Promise.all(
            (req.files["videos"] || []).map(file => uploadOnCloudinary(file.path).then(res => res?.url))
        );

        // Create new FarmVerification entry
        const farmVerification = new FarmVerification({
            farmerId,
            description,
            images: imageUrls,
            videos: videoUrls,
        });

        await farmVerification.save();

        res.status(201).json({
            message: "Farm verification data uploaded successfully.",
            farmVerification
        });
    } catch (error) {
        console.error("Error uploading farm verification data:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};
