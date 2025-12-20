import { useEffect, useState } from "react";
import Listing from "../Apis/Listing";
import DeletePopup from "../component/DeletePopup";
import AddCategory from "./AddCategory";
import SideBarAdmin from "../common/SideBarAdmin";
import HeaderAdmin from "../common/HeaderAdmin";
import Nodata from "../common/Nodata";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const api = new Listing();
      const response = await api.CategoryGet();
      console.log("Categories response:", response);
      
      // Structure categories hierarchically
      const structuredCategories = structureCategories(response?.data || []);
      setCategories(structuredCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to structure categories hierarchically
  const structureCategories = (flatCategories) => {
    if (!flatCategories || !Array.isArray(flatCategories)) {
      return [];
    }
    
    const categoriesMap = {};
    const rootCategories = [];

    // Create a map of all categories
    flatCategories.forEach(category => {
      categoriesMap[category.id] = { ...category, children: [] };
    });

    // Build the hierarchy
    flatCategories.forEach(category => {
      if (category.parent_id) {
        const parent = categoriesMap[category.parent_id];
        if (parent) {
          parent.children.push(categoriesMap[category.id]);
        }
      } else {
        rootCategories.push(categoriesMap[category.id]);
      }
    });

    return rootCategories;
  };

  // Render categories recursively
  const renderCategoryRow = (category, level = 0) => {
    const paddingLeft = level * 40;
    
    return (
      <>
        <tr key={category.id} className="bg-white border-t hover:bg-gray-50">
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
            {category.id}
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]" style={{ paddingLeft: `${paddingLeft}px` }}>
            <div className="flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${level === 0 ? 'bg-blue-500' : level === 1 ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              {category.title || 'No Title'}
            </div>
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
            {level === 0 ? 'Main Category' : level === 1 ? 'Sub Category' : 'Child Category'}
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
            {category.parent_id ? `Parent: ${category.parent_id}` : 'Root'}
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
            {category.image && category.image.startsWith('http') ? (
              <img
                src={category.image}
                alt={category.title}
                className="w-16 h-16 object-cover rounded-md"
              />
            ) : category.image ? (
              <img
                src={`http://localhost:5000${category.image}`}
                alt={category.title}
                className="w-16 h-16 object-cover rounded-md"
              />
            ) : (
              'No Image'
            )}
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D] max-w-xs truncate">
            {category.description || 'No description'}
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
            <AddCategory 
              item={category} 
              fetchCategories={fetchCategories} 
              categories={categories}
            />
          </td>
          <td className="px-3 py-4 text-[15px] font-medium text-[#46494D]">
            <DeletePopup 
              step={2} 
              item={category} 
              fetchTeamList={fetchCategories} 
              type="category"
            />
          </td>
        </tr>
        {category.children && category.children.map(child => 
          renderCategoryRow(child, level + 1)
        )}
      </>
    );
  };

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:flex flex-wrap bg-[#F5F6FB] min-h-screen">
      <SideBarAdmin />
      <div className="w-full lg:w-[calc(100%-304px)]">
        <HeaderAdmin title="Category Management" />

        <div className="px-4 py-2 lg:px-10 lg:py-2.5">
          <div className="bg-white rounded-[20px] mb-[30px]">
            <div className="py-4 px-4 md:px-6 lg:px-10 flex justify-between items-center border-b border-black border-opacity-10">
              <h3 className="text-base lg:text-lg font-semibold text-[#1E1E1E] tracking-[-0.03em]">
                Category List
              </h3>
              <AddCategory 
                item={null} 
                fetchCategories={fetchCategories} 
                categories={categories}
              />
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="text-center py-10">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="mt-2 text-gray-600">Loading categories...</p>
                </div>
              ) : categories.length === 0 ? (
                <Nodata />
              ) : (
                <table className="min-w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">ID</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Title</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Level</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Parent</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Image</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Description</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Edit</th>
                      <th className="px-3 py-3 text-sm font-medium text-[#8D929A] text-left uppercase">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map(category => renderCategoryRow(category))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;