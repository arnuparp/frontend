import axios from "./axios";

export const getProduct = async () => {
  try {
    const response = await axios.get("/Product");
    //console.log(response.data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`/Product/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const searchProduct = async (query) => {
  try {
    const response = await axios.get(`/Product/search/where?${query}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createProduct = async (data) => {
  try {
    const response = await axios.post(`/Product`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateProduct = async (data) => {
  try {
    const response = await axios.put(`/Product/${data.UserId}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`/Product/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const GetTransectionAll = async () => {
  try {
    const response = await axios.get(`/Transection`);
    return response;
  } catch (error) {
    return error;
  }
};

export const createTransection = async (data) => {
  try {
    const response = await axios.post(`/Transection`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteTransection = async (id) => {
  try {
    const response = await axios.delete(`/Transection/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateTransection = async (data) => {
  try {
    const response = await axios.put(`/Transection/${data.id_tran}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
