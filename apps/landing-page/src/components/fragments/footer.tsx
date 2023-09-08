import { mdiEmail, mdiGithub, mdiLinkedin, mdiTwitter } from "@mdi/js";
import type { Component } from "solid-js";
import { IconButton, Button } from "#components/primitives";

const Footer: Component = () => {
  return (
    <>
      <div class="max-w-screen-xl p-4 m-0 md:p-8 w-full flex flex-col justify-center items-center md:items-start rounded-b-none border-b-0 gap-2 text-gray-600 dark:text-gray-300">
        <div class="flex-col md:flex-row flex w-full flex-1 justify-center items-start md:items-center gap-1 md:gap-2">
          <div class="flex w-full flex-col md:flex-row">
            <div class="flex justify-center md:justify-start items-start md:items-center gap-1 md:gap-2">
              <IconButton
                path={mdiEmail}
                variant="text"
                class="m-0"
                text="soft"
                link="mailto:hello@vrite.io"
              />
              <IconButton
                path={mdiTwitter}
                variant="text"
                class="m-0"
                text="soft"
                link="https://twitter.com/vriteio"
                target="_blank"
              />
              <IconButton
                path={mdiLinkedin}
                variant="text"
                class="m-0"
                text="soft"
                link="https://www.linkedin.com/company/vrite/"
                target="_blank"
              />
              <IconButton
                path={mdiGithub}
                variant="text"
                text="soft"
                class="m-0"
                link="https://github.com/vriteio/vrite"
                target="_blank"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row w-full mt-4 justify-center items-center text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} Vrite, Inc. All rights reserved.</span>
          <div class="flex-1" />{" "}
          <Button
            class="m-0 whitespace-nowrap"
            variant="text"
            text="soft"
            link="/privacy"
            target="_blank"
          >
            Privacy policy
          </Button>
          <Button
            class="m-0 whitespace-nowrap"
            variant="text"
            text="soft"
            link="/tos"
            target="_blank"
          >
            Terms of service
          </Button>
        </div>
      </div>
    </>
  );
};

export { Footer };
