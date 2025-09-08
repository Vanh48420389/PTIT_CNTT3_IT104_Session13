import React, { useState } from "react";

interface Contact {
    id: number;
    name: string;
    phone: string;
}

export default function Exercise02() {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: "Nguyễn Văn A", phone: "0912345678" },
        { id: 2, name: "Trần Thị B", phone: "0987654321" },
        { id: 3, name: "Lê Văn C", phone: "0901234567" },
    ]);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [editId, setEditId] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !phone.trim()) {
            alert("Vui lòng nhập đầy đủ tên và số điện thoại!");
            return;
        }

        if (editId !== null) {
            const updatedContacts = contacts.map((contact) =>
                contact.id === editId ? { ...contact, name, phone } : contact
            );
            setContacts(updatedContacts);
            setEditId(null);
        } else {
            const newContact: Contact = {
                id: Date.now(),
                name,
                phone,
            };
            setContacts([...contacts, newContact]);
        }

        setName("");
        setPhone("");
    };

    // Chọn liên hệ để sửa
    const handleEdit = (contact: Contact) => {
        setName(contact.name);
        setPhone(contact.phone);
        setEditId(contact.id);
    };

    // Xóa liên hệ
    const handleDelete = (id: number) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa liên hệ này?")) {
            setContacts(contacts.filter((c) => c.id !== id));
        }
    };

    return (
        <div className="bg-white p-4 min-h-screen">
            <div className="max-w-4xl mx-auto rounded-md shadow-md">
                {/* Header */}
                <header className="bg-green-700 rounded-t-md p-4 flex items-center justify-center">
                    <i className="fas fa-address-book text-white mr-2"></i>
                    <h1 className="text-white font-semibold text-lg">Quản Lý Liên Hệ</h1>
                </header>

                {/* Nội dung */}
                <section className="bg-white p-4 rounded-b-md space-y-4">
                    {/* Form thêm/sửa */}
                    <div>
                        <h2 className="text-green-700 font-semibold text-md flex items-center gap-2 mb-2">
                            <i className="fas fa-user-plus"></i>
                            {editId !== null ? "Chỉnh sửa liên hệ" : "Thêm liên hệ mới"}
                        </h2>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-2"
                        >
                            <input
                                type="text"
                                placeholder="Tên liên hệ"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 flex-1"
                            />
                            <input
                                type="text"
                                placeholder="Số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 flex-1"
                            />
                            <button
                                type="submit"
                                className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap"
                            >
                                {editId !== null ? "Cập nhật" : "Thêm"}
                            </button>
                            {editId !== null && (
                                <button
                                    type="button"
                                    onClick={() => {
                                        setEditId(null);
                                        setName("");
                                        setPhone("");
                                    }}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap"
                                >
                                    Hủy
                                </button>
                            )}
                        </form>
                    </div>

                    {/* Danh sách liên hệ */}
                    <div>
                        <h2 className="text-green-700 font-semibold text-md flex items-center gap-2 mb-2">
                            <i className="fas fa-list-ul"></i> Danh sách liên hệ
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm border border-gray-200 rounded-md">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="font-semibold px-4 py-2 border-b border-gray-200">
                                            Tên liên hệ
                                        </th>
                                        <th className="font-semibold px-4 py-2 border-b border-gray-200">
                                            Số điện thoại
                                        </th>
                                        <th className="font-semibold px-4 py-2 border-b border-gray-200">
                                            Hành động
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.length === 0 ? (
                                        <tr>
                                            <td
                                                colSpan={3}
                                                className="text-center py-3 text-gray-500"
                                            >
                                                Chưa có liên hệ nào
                                            </td>
                                        </tr>
                                    ) : (
                                        contacts.map((contact) => (
                                            <tr key={contact.id}>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {contact.name}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200">
                                                    {contact.phone}
                                                </td>
                                                <td className="px-4 py-2 border-b border-gray-200 space-x-2">
                                                    <button
                                                        onClick={() => handleEdit(contact)}
                                                        className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1"
                                                    >
                                                        <i className="fas fa-edit"></i> Sửa
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(contact.id)}
                                                        className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1"
                                                    >
                                                        <i className="fas fa-trash-alt"></i> Xóa
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <nav className="flex justify-center mt-4 space-x-2 text-gray-600 text-sm select-none">
                        <button
                            className="border border-gray-300 rounded px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled
                            aria-label="Previous page"
                        >
                            &lt;
                        </button>
                        <span className="border border-gray-300 rounded px-3 py-1">1</span>
                        <button
                            className="border border-gray-300 rounded px-3 py-1"
                            aria-label="Next page"
                        >
                            &gt;
                        </button>
                    </nav>
                </section>
            </div>
        </div>
    );
}
