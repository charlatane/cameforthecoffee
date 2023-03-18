import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props: any) => ({
        body: {
            // bg: mode("#2D394D", "#2D394D")(props),
            bg: mode("#1A202C", "#1A202C")(props),
            
                        // bg: mode("gray.800", "#gray.800")(props),
            color: "white",
        },
    }),
};

export default styles;
