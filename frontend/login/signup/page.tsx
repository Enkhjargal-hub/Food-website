// "use client";
// import { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// export default function Signup() {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/api/auth/signup", formData);
//       alert(res.data.message);
//       router.push("/auth/login"); // Амжилттай бол нэвтрэх хуудас руу
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Алдаа гарлаа");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Бүртгүүлэх</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="name" type="text" placeholder="Нэр" onChange={handleChange} className="w-full p-2 border" required />
//         <input name="email" type="email" placeholder="Имэйл" onChange={handleChange} className="w-full p-2 border" required />
//         <input name="password" type="password" placeholder="Нууц үг" onChange={handleChange} className="w-full p-2 border" required />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Бүртгүүлэх</button>
//       </form>
//     </div>
//   );
// }

