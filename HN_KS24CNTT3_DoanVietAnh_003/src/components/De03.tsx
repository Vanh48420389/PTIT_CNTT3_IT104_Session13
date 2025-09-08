import React from 'react'
import { useState, useEffect } from "react";
type Product = {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    marked: boolean;
}


export default function De03() {
    const [products, setProducts] = useState<Product[]>([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [inStock, setInStock] = useState(true);

    useEffect(() => {
        const data = localStorage.getItem("products");
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProduct = () => {
        if (name.trim() === "" || price.trim() === "") {
            alert("Thiếu thông tin sản phẩm")
        }

        const numberPrice = Number(price);

        if (isNaN(numberPrice) || numberPrice <= 0) {
            alert("Giá sản phẩm không hợp lệ");
            return;
        }

        const newProduct: Product = {
            id: Date.now(),
            name: name.trim(),
            price: numberPrice,
            inStock: inStock,
            marked: false
        };

        setProducts(prev => [...products, newProduct]);
        setName("");
        setPrice("");
        setInStock(true);

       



    }

     const toggleMark = (id: number) => {
            setProducts(prev =>
                prev.map(product =>
                    product.id === id ? { ...product, marked: !product.marked } : product
                )
            );
        };

        const deleteProduct = (id: number) => {
            setProducts(prev => prev.filter(product => product.id !== id));
        };

    return (
        <div>
            <div className='min-h-screen p-4 bg-white'>

                <div className='bg-blue-500 text-white py-4 flex justify-center'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-2xl font-bold'>Quản lí Sản Phẩm</h1>
                    </div>
                </div>


                <div className='flex justify-center mt-4'>
                    <div className='w-full max-w-4xl bg-white p-4 rounded-md shadow-md'>

                        <div className='bg-white p-5 rounded-xl shadow-md'>
                            <h2 className='font-bold text-lg mb-4 flex items-center gap-2'>
                                <span className='text-blue-500'>+</span>
                                Thêm Sản Phẩm
                            </h2>
                            <div className='flex items-cneter gap-2' >
                                <input 
                                type="text" 
                                placeholder='Tên Sản Phẩm'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='border border-gray-300 rounded-md p-2 flex-1'
                                />
                                <input 
                                type="text"
                                placeholder='Giá Sản Phẩm'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className='border border-gray-300 rounded-md p-2 flex-1'
                                />
                                <label htmlFor="" className='flex items-center gap-2 text-sm'>
                                    <input 
                                    type="checkbox"
                                    checked={inStock}
                                    onChange={(e) => setInStock(e.target.checked)}
                                    className='h-4 w-4'
                                    />
                                    Còn Hàng
                                </label>
                                <button
                                onClick={addProduct}
                                className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'
                                >
                                    Thêm Sản Phẩm

                                </button>

                            </div>
                        </div>

                        <div className='bg-white p-5 rounded-xl shadow-md mt-4'>
                            <h2 className='font-bold text-lg mb-4 flex items-center gap-2'>
                                Danh sach Sản Phẩm
                            </h2>
                            <table className='w-full border-collapse'>
                                <thead>
                                    <tr className='bg-gray-200 text-left text-sm'>
                                        <th className='p-2 border border-gray-300'>Tên Sản Phẩm</th>
                                        <th className='p-2 border border-gray-300'>Giá</th>
                                        <th className='p-2 border border-gray-300'>Trạng Thái</th>
                                        <th className='p-2 border border-gray-300'>Hành Động</th>

                                    </tr>
                                </thead>
                                <tbody className='text-sm'>
                                    {products.length === 0 ?(
                                        <tr>
                                            <td colSpan={4} className='text-center p-6 text-gray-500'>
                                                Chưa có sản phẩm nào
                                            </td>
                                        </tr>
                                    ): (
                                        products.map((p) => (
                                            <tr key ={p.id} className='border hover:bg-gray-100 transition'>
                                                <td className={`p-3 ${p.marked ? "inline-through text-gray-500" : "text-gray-800"}`}>
                                                    {p.name}
                                                </td>
                                                <td className='p-3 text-gray-800'>
                                                    {p.price.toLocaleString("vi-Vn")} VND
                                                </td>
                                                <td className='p-3'>
                                                    {p.inStock ? (
                                                        <span className='text-green-500 font-semibold'>Còn Hàng</span>
                                                    ) : (
                                                        <span className='text-red-500 font-semibold'>Hết Hàng</span>
                                                    )}
                                                </td>
                                                <td className='p-3 flex items-center gap-2'>
                                                    <button onClick={() => toggleMark(p.id)} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors'>
                                                        Đánh Dấu
                                                    </button>
                                                    <button onClick={() => deleteProduct(p.id)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors'
                                                    >
                                                        Xóa
                                                    </button>

                                                </td>
                                                                              
                                            </tr>
                                    ))
                                    )}

                                </tbody>

                            </table>
                            <p className='text-sm text-gray-500 mt-3'>
                                Tổng : {products.length} Sản Phẩm
                            </p>

                        </div>


                    </div>

                </div>



            </div>
        </div>
    )
}
