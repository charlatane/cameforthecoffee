import { ReactNode } from "react";
import { Accept, useDropzone } from "react-dropzone";

import { Flex, Stack, Text } from "@chakra-ui/react";

interface FileDropzoneComponentProps {
  allowedFileTypes: Accept;
  onDrop: (files: File[]) => void;
  allowMultiple: boolean;
  maxFiles: number;
  uploadIcon: ReactNode;
  instructionText: string;
  instructionSubtext?: string;
  dragAcceptText: string;
  dragRejectText: string;
}

export const FileDropzoneComponent: React.FC<FileDropzoneComponentProps> = (
  props: FileDropzoneComponentProps
) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop: props.onDrop,
    maxFiles: props.maxFiles,
    accept: props.allowedFileTypes,
    multiple: props.allowMultiple,
    useFsAccessApi: false // Bug Fix: https://github.com/react-dropzone/react-dropzone/issues/1190
  });

  const dropzoneBackgroundColor = isDragActive
    ? isDragAccept
      ? "green.50"
      : "red.50"
    : "gray.100";

  return (
    <Flex
      align="center"
      justify="center"
      bgColor={dropzoneBackgroundColor}
      color={isDragActive ? "gray.600" : "gray.500"}
      _hover={{
        color: "gray.600",
        borderColor: "gray.500"
      }}
      borderStyle="dashed"
      borderWidth="2px"
      borderColor={isDragActive ? "gray.500" : "gray.300"}
      borderRadius="lg"
      width="100%"
      height="64"
      minH="100%"
      cursor="pointer"
      {...getRootProps({ className: "dropzone" })}
    >
      <input {...getInputProps()} />

      <Stack alignItems={"center"} textAlign="center" p={6}>
        {props.uploadIcon}
        {!isDragActive && <Text>{props.instructionText}</Text>}
        {!isDragActive &&
          (props.instructionSubtext ?? (
            <Text fontSize="xs">{props.instructionSubtext}</Text>
          ))}
        {isDragAccept && <Text>{props.dragAcceptText}</Text>}
        {isDragReject && <Text>{props.dragRejectText}</Text>}
      </Stack>
    </Flex>
  );
};
