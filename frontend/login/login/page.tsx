// "use client"; 
// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/api/auth/sign-in", formData); 
//       localStorage.setItem("token", res.data.token); // JWT хадгалах
//       router.push("/dashboard"); // Амжилттай нэвтэрсний дараа "Dashboard" руу шилжих
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Алдаа гарлаа");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center mb-4">Нэвтрэх</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input 
//             name="email" 
//             type="email" 
//             placeholder="Имэйл" 
//             value={formData.email}
//             onChange={handleChange} 
//             className="w-full p-2 border rounded"
//             required 
//           />
//           <input 
//             name="password" 
//             type="password" 
//             placeholder="Нууц үг" 
//             value={formData.password}
//             onChange={handleChange} 
//             className="w-full p-2 border rounded"
//             required 
//           />
//           <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
//             Нэвтрэх
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

