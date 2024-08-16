import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, ScrollView, Button } from 'react-native';
import axios from 'axios';

const ProductDetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error fetching product details.</Text>;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.detail}>Brand: {product.brand}</Text>
      <Text style={styles.detail}>Category: {product.category}</Text>
      <Text style={styles.detail}>Stock: {product.stock}</Text>
      <Text style={styles.detail}>Weight: {product.weight}g</Text>
      <Text style={styles.detail}>Dimensions: {product.dimensions.width}x{product.dimensions.height}x{product.dimensions.depth} cm</Text>
      <Text style={styles.detail}>Warranty: {product.warrantyInformation}</Text>
      <Text style={styles.detail}>Shipping: {product.shippingInformation}</Text>
      <Text style={styles.detail}>Availability: {product.availabilityStatus}</Text>
      <Text style={styles.detail}>Return Policy: {product.returnPolicy}</Text>
      <Text style={styles.detail}>Minimum Order: {product.minimumOrderQuantity}</Text>

      <View style={styles.reviewsContainer}>
        <Text style={styles.reviewsTitle}>Reviews:</Text>
        {product.reviews.map((review, index) => (
          <View key={index} style={styles.review}>
            <Text style={styles.reviewText}>Rating: {review.rating} - {review.comment}</Text>
            <Text style={styles.reviewText}>By: {review.reviewerName} </Text>
          </View>
        ))}
      </View>

    

        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  price: {
    fontSize: 20,
    color: '#888',
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    marginVertical: 8,
  },
  detail: {
    fontSize: 16,
    marginVertical: 4,
  },
  reviewsContainer: {
    marginVertical: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  review: {
    marginBottom: 12,
  },
  reviewText: {
    fontSize: 16,
  },
});

export default ProductDetailScreen;
