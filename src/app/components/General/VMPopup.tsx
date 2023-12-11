import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const VMPopup = ({
  children,
  isClose,
  footer,
  title,
  size = "md",
}: {
  children?: React.ReactNode;
  isClose: any;
  footer?: React.ReactNode;
  title?: string;
  size?:
    | "md"
    | "sm"
    | "lg"
    | "full"
    | "xs"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | undefined;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 0);
  }, []);

  const _handleClose = () => {
    onClose();
    isClose();
  };

  return (
    <>
      <Modal
        backdrop={"blur"}
        isOpen={isOpen}
        size={size}
        onClose={_handleClose}
        classNames={{
          wrapper: "z-[888]",
          base: "vm-bg",
          closeButton:
            "text-white hover:bg-white hover:opacity-50 hover:text-primary z-[9999]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {title && (
                <ModalHeader className="flex flex-col text-center gap-1 text-white opacity-75">
                  {title}
                </ModalHeader>
              )}

              <ModalBody>{children}</ModalBody>
              {!footer && <ModalFooter>{footer}</ModalFooter>}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default VMPopup;
