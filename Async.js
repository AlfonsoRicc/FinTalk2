const handleContinuePress = async () => {
    if (selectedCategories.length > 0) {
      try {
        // Replace with your actual API endpoint
        const response = await axios.post('https://yourbackend.com/api/user/expertise', {
          categories: selectedCategories.map(category => category.id)
        });
      navigation.navigate('WorkHistory');
    } catch (error) {
    console.error('Error saving expertise:', error);
    alert('Failed to save expertise.');
}
  } else {
    alert('Please select at least one field of expertise.');
  }
};