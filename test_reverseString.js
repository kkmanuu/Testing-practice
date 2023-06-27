function test_reverseString() {
    // Test with a regular string
    const reversedString1 = reverseString("Hello, World!");
    console.log(reversedString1);

    // Test with an empty string
    const reversedString2 = reverseString("");
    console.log(reversedString2);

    // Test with a single character string
    const reversedString3 = reverseString("A");
    console.log(reversedString3);

    // Test with a string containing whitespace
    const reversedString4 = reverseString("   Hello   ");
    console.log(reversedString4);

    // Test with a string containing special characters
    const reversedString5 = reverseString("@#^&$");
    console.log(reversedString5);
  }

  test_reverseString();
