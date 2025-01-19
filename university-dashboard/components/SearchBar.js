import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (text) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder="Search courses..."
      value={query}
      onChangeText={handleChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 5,
  },
});
