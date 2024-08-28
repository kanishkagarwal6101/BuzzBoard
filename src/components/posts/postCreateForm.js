"use client";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

import * as actions from "@/actions";
import { useFormState } from "react-dom";
import FormButton from "../common/form-button";

export default function PostCreateForm(props) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, props.slug),
    {
      errors: {},
    }
  );
  //   const [formState, action] = useFormState(
  //     (formData) => actions.createPost(formData, props.slug),
  //     {
  //       errors: {},
  //     }
  //   );

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              label="Title"
              name="title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              label="Content"
              name="content"
              labelPlacement="outside"
              placeholder="What's on your mind"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form?.join(", ")}
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
