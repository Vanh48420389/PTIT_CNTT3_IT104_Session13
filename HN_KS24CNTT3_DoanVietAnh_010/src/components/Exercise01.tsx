import React from 'react'

export default function Exercise01() {
  return (
      <div className="bg-white p-4 min-h-screen">
      <div className="max-w-4xl mx-auto rounded-md shadow-md">
        <header className="bg-green-700 rounded-t-md p-4 flex items-center justify-center">
          <i className="fas fa-address-book text-white mr-2"></i>
          <h1 className="text-white font-semibold text-lg">Quản Lý Liên Hệ</h1>
        </header>

        <section className="bg-white p-4 rounded-b-md space-y-4">
          <div>
            <h2 className="text-green-700 font-semibold text-md flex items-center gap-2 mb-2">
              <i className="fas fa-user-plus"></i> Thêm liên hệ mới
            </h2>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Tên liên hệ"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 flex-1"
              />
              <input
                type="text"
                placeholder="Số điện thoại"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 flex-1"
              />
              <button
                type="submit"
                className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap"
              >
                Thêm
              </button>
            </form>
          </div>

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
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200">
                      Nguyễn Văn A
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      0912345678
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200 space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1">
                        <i className="fas fa-edit"></i> Sửa
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1">
                        <i className="fas fa-trash-alt"></i> Xóa
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-b border-gray-200">
                      Trần Thị B
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      0987654321
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200 space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1">
                        <i className="fas fa-edit"></i> Sửa
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1">
                        <i className="fas fa-trash-alt"></i> Xóa
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Lê Văn C</td>
                    <td className="px-4 py-2">0901234567</td>
                    <td className="px-4 py-2 space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1">
                        <i className="fas fa-edit"></i> Sửa
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded-md text-xs font-semibold inline-flex items-center gap-1">
                        <i className="fas fa-trash-alt"></i> Xóa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
          </div>
        </section>
      </div>
    </div>
  )
}
