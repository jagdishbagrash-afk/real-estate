import Category from './Category';

class Listing {
  constructor() {
    this.categoryApi = new Category();
  }

  // Category Methods
  async CategoryGet() {
    return await this.categoryApi.getCategories();
  }

  async getCategoryById(id) {
    return await this.categoryApi.getCategoryById(id);
  }

  async AddCategory(data) {
    return await this.categoryApi.createCategory(data);
  }

  async UpdateCategory(id, data) {
    return await this.categoryApi.updateCategory(id, data);
  }

  async DeleteCategory(id) {
    return await this.categoryApi.deleteCategory(id);
  }

  async getCategoriesByLevel(level) {
    return await this.categoryApi.getCategoriesByLevel(level);
  }

  async getSubcategories(parentId) {
    return await this.categoryApi.getSubcategories(parentId);
  }

  async getMainCategories() {
    return await this.categoryApi.getMainCategories();
  }

  async getCategoryHierarchy() {
    return await this.categoryApi.getCategoryHierarchy();
  }

  // Other existing methods (keep your existing methods)
  async deleteteam(data) {
    // Your existing team delete method
    return await this.deleteTeam(data);
  }

  async JobDelete(data) {
    // Your existing job delete method
    return await this.deleteJob(data);
  }

  async BlogDelete(data) {
    // Your existing blog delete method
    return await this.deleteBlog(data);
  }

  async ProjectDelete(data) {
    // Your existing project delete method
    return await this.deleteProject(data);
  }

  async TeamDelete(data) {
    // Your existing team delete method
    return await this.deleteTeamMember(data);
  }
}

export default Listing;