import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </Switch>
    </HStack>
  );
};

export default ColorModeSwitch;
