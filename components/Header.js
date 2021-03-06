import { Box, Button, Spacer, Text, useColorMode } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { FaSignOutAlt as LogoutIcon } from "react-icons/fa";

const Header = () => {
  const { colorMode } = useColorMode();
  const { user, authenticate, isWeb3Enabled, logout, isLoggingOut } =
    useMoralis();

  return (
    <Box
      bg={colorMode == "light" ? "white" : "gray.600"}
      p={4}
      display="flex"
      flexDir={["column", "row"]}
      alignItems="center"
    >
      <Text fontSize="3xl">AmeerSwap</Text>
      <Spacer />
      <Box display="flex" mt={["4", "0"]}>
        {user?.id ? (
          <Button
            onClick={logout}
            rightIcon={<LogoutIcon />}
            isLoading={isLoggingOut}
          >
            {user.id}
          </Button>
        ) : (
          <Button onClick={authenticate}>Authenticate</Button>
        )}
        <Box mr={2}>
          <ColorModeSwitcher />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
