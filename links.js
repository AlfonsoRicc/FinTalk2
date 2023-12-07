if (showSocialLinks) { // save or send social links data
}

<TouchableOpacity 
style={styles.checkboxContainer} onPress={() => setShowSocialLinks(!showSocialLinks)}>
<View style={styles.checkbox}>
  {showSocialLinks && (<Icon name="check" size={20} color="#171C24" />)}
</View> 
<Text style={styles.checkboxLabel}>Show my social links to my profile</Text>
</TouchableOpacity>

const [showSocialLinks, setShowSocialLinks] = useState(false);