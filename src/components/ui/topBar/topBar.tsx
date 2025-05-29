import { Flex, Heading, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router";
import "./animations.css";

interface IProps {

}

export default function TopBar(props: IProps) {
    return (
        <Flex justify={'space-between'} m={'20px 10px'}>
            <NavLink to={'/'}>
                <Heading size={'4xl'} m={'0 auto'}>Music Notes</Heading>
            </NavLink>
            <HStack gap={25}>
                <Button title="Home" url="/" />
                <Button title="All posts" url="/posts" />
                <Button title="About" url="/about" />
            </HStack>
        </Flex>
    )
}

interface IButtonProps {
    title: string,
    url: string,
}

function Button({ title, url }: IButtonProps) {
    return (
        <NavLink to={url}>
            <Heading size={'2xl'} _hover={{ animation: '100ms linear forwards shadow' }}>{title}</Heading>
        </NavLink>
    );
}