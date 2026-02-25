const API_URL = import.meta.env.VITE_API_URL;

export const wordpressService = {
  async getPosts() {
    try {
      const response = await fetch(`${API_URL}/posts?_embed`);
      
      if (!response.ok) {
        throw new Error('Error al obtener posts');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error al cargar posts:', error);
      throw error;
    }
  }
};