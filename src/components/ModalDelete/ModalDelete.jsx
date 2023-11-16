import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Popover 
      showArrow
      backdrop="opaque"
      placement="right"
      classNames={{
        base: [  
          "before:bg-default-200"
        ],
        content: [
          "py-3 px-4 border border-default-200",
          "bg-gradient-to-br from-white to-default-300",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
    >
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2">
            <h3 className="text-small font-bold" {...titleProps}>
              ¿Esta seguro que desea eliminar el usuario?
            </h3>
            <button>Si</button>
            <br />
            <button>No</button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
