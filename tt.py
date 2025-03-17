import shutil  # To move the output files
from gradio_client import Client, handle_file

# Initialize the client
client = Client("Nymbo/Virtual-Try-On")

# File paths
background_img = "C:/WEB DEVLOPEMENT/newtry/man.jpg"
garment_img = "C:/WEB DEVLOPEMENT/newtry/Tshirt.webp"

# Call the API
result = client.predict(
    dict={"background": handle_file(background_img), "layers": [], "composite": None},
    garm_img=handle_file(garment_img),
    garment_des="Trendy fashion wear",
    is_checked=True,
    is_checked_crop=False,
    denoise_steps=30,
    seed=42,
    api_name="/tryon"
)

# Get output images
output_img, masked_img = result

# Define new paths to save output
output_path = "C:/WEB DEVLOPEMENT/newtry/output_image.png"
masked_path = "C:/WEB DEVLOPEMENT/newtry/masked_image.png"

# Copy the images from Temp to your folder
shutil.copy(output_img, output_path)
shutil.copy(masked_img, masked_path)

print(f"✅ Try-On Image saved at: {output_path}")
print(f"✅ Masked Image saved at: {masked_path}")
