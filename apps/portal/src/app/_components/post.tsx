"use client";

import { useState } from "react";
import { Button, TextArea  } from '@radix-ui/themes';
import { api } from "../../trpc/react";
import * as Form from '@radix-ui/react-form';

export function LatestPost() {
  const [latestPost] = api.post.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const createPost = api.post.create.useMutation({
    onSuccess: async () => {
      await utils.post.invalidate();
      setName("");
    },
  });

  return (
    <div className="w-full max-w-xs text-center">
      {latestPost ? (
        <p className="truncate">Posts récents: {latestPost.name}</p>
      ) : (
        <p>Pas encore de posts.
          <br />
          Cliquez sur le bouton ci-dessus pour en creer un.
        </p>
      )}
      <Form.Root
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ name });
        }}
        className="flex flex-col gap-2 FormRoot"
      >
        <TextArea
          placeholder="Titre de l'entrée"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 text-black rounded-full"
        />
        <Button
          type="submit"
          className="px-10 py-3 font-semibold transition rounded-full bg-white/10 hover:bg-white/20"
          disabled={createPost.isPending}
        >
          {createPost.isPending ? "Submitting..." : "Créer un post"}
        </Button>
      </Form.Root>
    </div>
  );
}
