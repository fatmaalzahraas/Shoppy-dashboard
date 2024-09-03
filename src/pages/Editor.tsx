import { Box } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { PageBox } from "../styles/themeStyles";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { useRef } from "react";
import { EditorData } from "../data/data";

const EditorPage = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  return (
    <Helmet title="Editor">
      <PageBox>
        <Header title="Editor" category="APP" />
        <Box sx={{ paddingX: { xs: "0.5rem", md: "2.2rem" } }}>
          <form>
            <Editor
              apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
              onInit={(_, editor) => (editorRef.current = editor)}
              initialValue={EditorData}
              init={{
                menubar: false,
                plugins:
                  "lists link autolink image code autoresize autosave save",
                toolbar:
                  "bold italic underline | blocks blockquote align numlist bullist | link image | code undo redo save",
                image_title: true,
                automatic_uploads: true,
                file_picker_types: "image",
                statusbar: false,
                min_height: 150,
                save_enablewhendirty: true,
                save_onsavecallback: () => {
                  console.log(editorRef.current?.getContent());
                },
                content_style: "body {font-size:18px }",
                file_picker_callback: (cb) => {
                  const input = document.createElement("input");
                  input.setAttribute("type", "file");
                  input.setAttribute("accept", "image/*");
                  input.addEventListener("change", (e) => {
                    const el = e.target as HTMLInputElement;
                    const file = el?.files?.[0];
                    const reader = new FileReader();
                    reader.addEventListener("load", () => {
                      const id = "blobid" + new Date().getTime();
                      const blobCache =
                        editorRef.current?.editorUpload.blobCache;
                      if (blobCache) {
                        const base64 = reader.result as string;
                        const blobInfo = blobCache.create(id, file!, base64);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), { title: file?.name });
                      }
                    });
                    reader.readAsDataURL(file!);
                  });
                  input.click();
                },
              }}
            />
          </form>
        </Box>
      </PageBox>
    </Helmet>
  );
};

export default EditorPage;
