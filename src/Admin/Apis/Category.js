import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class Category {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    // For file uploads
    this.apiFile = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  // Get all categories
  async getCategories() {
    try {
      const response = await this.api.get('/categories');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Get category by ID
  async getCategoryById(id) {
    try {
      const response = await this.api.get(`/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Create category
  async createCategory(data) {
    try {
      const response = await this.apiFile.post('/categories', data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Update category
  async updateCategory(id, data) {
    try {
      const response = await this.apiFile.put(`/categories/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Delete category
  async deleteCategory(id) {
    try {
      const response = await this.api.delete(`/categories/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Get categories by level
  async getCategoriesByLevel(level) {
    try {
      const response = await this.api.get(`/categories/level/${level}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Get subcategories by parent ID
  async getSubcategories(parentId) {
    try {
      const response = await this.api.get(`/categories/parent/${parentId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Get main categories list (for dropdown)
  async getMainCategories() {
    try {
      const response = await this.api.get('/categories/main/list');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  // Get category hierarchy
  async getCategoryHierarchy() {
    try {
      const response = await this.api.get('/categories/hierarchy');
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}

export default Category;