import axios from 'axios';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import PlusIcon from '../components/icons/PlusIcon';
import XIconStartSelling from '../components/icons/XIconStartSelling';
import { useAuth } from '../context/AuthContext';

function StartSelling() {
  // disable form if not logged in
  // check number of images
  // check file types

  const { loadingUser, user } = useAuth();
  const [tagsInput, setTagsInput] = useState('');
  const tagsInputElement: any = useRef(null);

  const disableForm = () => {
    // create a useRef for all the inputs and submit button, then disable them
  };

  useEffect(() => {
    !loadingUser && !user && console.log('hi');
  }, [loadingUser, user]);

  const [data, setData] = useState<any>({
    name: '',
    category: '',
    tags: [],
    price: 0.0,
    description: '',
    thumbnail: null,
    images: [],
    files: null,
  });

  const [containsErrors, setContainersErrors] = useState<Boolean>(false);
  const [errorMessages, setErrorMessages] = useState<any>({
    name: '',
    category: '',
    tags: '',
    price: '',
    description: '',
    thumbnail: '',
    images: '',
    files: '',
  });
  useEffect(() => {
    // sets containsErrors
    for (const key of Object.keys(errorMessages)) {
      if (errorMessages[key] !== '') {
        setContainersErrors(true);
        return;
      }
    }
    setContainersErrors(false);
  }, [errorMessages]);

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();

      if (!checkForEmptyFields() && !containsErrors) {
        const form = new FormData();
        form.append('name', data.name);
        form.append('category', data.category);
        data.tags.forEach((tag: any) => form.append('tags', tag));
        form.append('price', data.price);
        form.append('description', data.description);
        form.append('thumbnail', data.thumbnail);
        data.images.forEach((image: any) => form.append('images', image));
        form.append('files', data.files);

        const res = await axios.post('start-selling/', form);

        console.log(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkForEmptyFields = () => {
    // reset error messages
    setErrorMessages((errorMessages: any) => ({
      name: errorMessages.name.startsWith('Missing') ? '' : errorMessages.name,
      category: errorMessages.category.startsWith('Missing')
        ? ''
        : errorMessages.category,
      tags: errorMessages.tags.startsWith('Missing') ? '' : errorMessages.tags,
      price: '',
      description: errorMessages.description.startsWith('Missing')
        ? ''
        : errorMessages.description,
      thumbnail: errorMessages.thumbnail.startsWith('Missing')
        ? ''
        : errorMessages.thumbnail,
      images: errorMessages.images.startsWith('Missing')
        ? ''
        : errorMessages.images,
      files: errorMessages.files.startsWith('Missing')
        ? ''
        : errorMessages.files,
    }));

    // other stuff

    let containsErrors = false;

    if (!data.name) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        name: 'Missing name',
      }));
      containsErrors = true;
    }
    if (!data.category) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        category: 'Missing category',
      }));
      containsErrors = true;
    }
    if (data.tags.length === 0) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        tags: 'Missing tags',
      }));
      containsErrors = true;
    }
    if (!data.price && data.price !== 0) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        price: 'Missing price',
      }));
      containsErrors = true;
    }
    if (!data.description) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        description: 'Missing description',
      }));
      containsErrors = true;
    }
    if (!data.thumbnail) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        thumbnail: 'Missing thumbnail',
      }));
      containsErrors = true;
    }
    if (data.images.length === 0) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        images: 'Missing images',
      }));
      containsErrors = true;
    }
    if (!data.files) {
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        files: 'Missing files',
      }));
      containsErrors = true;
    }

    return containsErrors;
  };

  // ------------- validate inputs -------------

  useEffect(() => {
    // Name
    const MAX_NAME_LENGTH = 100;
    if (data.name.length > MAX_NAME_LENGTH)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        name: 'Maximum of 100 characters',
      }));
    else
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        name: '',
      }));
  }, [data.name]);

  useEffect(() => {
    // Category
    if (data.category)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        category: '',
      }));
  }, [data.category]);

  useEffect(() => {
    // Tags
    const MAX_TAG_LENGTH = 25;
    if (tagsInput.length > MAX_TAG_LENGTH)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        tags: 'Maximum of 25 characters',
      }));
    else if (errorMessages.tags !== 'Missing tags')
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        tags: '',
      }));
  }, [tagsInput, errorMessages.tags]);

  useEffect(() => {
    // Tags
    if (data.tags.length > 0)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        tags: '',
      }));
  }, [data.tags.length]);

  // useEffect(() => {
  //   // Price
  // }, [data.price]);

  useEffect(() => {
    // Description
    const MAX_DESCRIPTION_LENGTH = 5000;
    if (data.description.length > MAX_DESCRIPTION_LENGTH)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        description: 'Maximum of 5000 characters',
      }));
    else
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        description: '',
      }));
  }, [data.description]);

  useEffect(() => {
    // Thumbnail
    if (data.thumbnail)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        thumbnail: '',
      }));
  }, [data.thumbnail]);

  useEffect(() => {
    // Images
    if (data.images.length > 0)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        images: '',
      }));
  }, [data.images]);

  useEffect(() => {
    // Files
    if (data.files)
      setErrorMessages((errorMessages: String) => ({
        ...errorMessages,
        files: '',
      }));
  }, [data.files]);

  // ------------- validate inputs -------------

  const createTag = () => {
    const MAX_TAGS = 5;
    const MAX_TAG_LENGTH = 25;

    if (
      data.tags.length < MAX_TAGS &&
      tagsInput &&
      tagsInput.length <= MAX_TAG_LENGTH
    ) {
      setData({
        ...data,
        tags: [...new Set(data.tags).add(tagsInput.trim())],
      });
      setTagsInput('');
      tagsInputElement?.current.focus();
    }
  };

  const deleteTag = (tag: string) => {
    setData({
      ...data,
      tags: data.tags.filter((a: string) => a !== tag),
    });
  };
  return (
    <>
      {!user && (
        <div className="h-12 w-full bg-neutral-800 rounded-b-md flex items-center justify-center">
          <div className="text-sm">
            <span>You must sign in to upload code. </span>
            <Link href="/sign-in">
              <a className="clickable text-red-400">Sign in</a>
            </Link>
          </div>
        </div>
      )}
      <main className="mx-auto max-w-[90rem] px-4 flex flex-col items-center">
        {!loadingUser && (
          <form
            action=""
            className="flex justify-start flex-col w-full max-w-[35rem] bg-neutral-900 p-16 px-6 sm:px-16 my-8 rounded-md"
            onKeyDown={(e: any) => e.key === 'Enter' && e.preventDefault()} // stops users from submitting when they press enter
          >
            <h1 className="med-heading text-center">Upload your code</h1>
            <label htmlFor="item-name" className="w-fit mt-6 text-sm">
              Name of item
            </label>
            <input
              autoFocus
              type="text"
              id="item-name"
              className="rounded-md text-black h-12 px-3 mt-1 outline-red-400 outline-2 focus:outline"
              value={data.name}
              onChange={(e) =>
                setData({
                  ...data,
                  name: e.target.value,
                })
              }
            />
            <div className="h-2 text-red-500 text-sm">{errorMessages.name}</div>
            <label htmlFor="category" className="w-fit mt-4 text-sm">
              Category
            </label>
            <select
              id="category"
              className="h-12 px-3 rounded-md mt-1 outline-red-400 outline-2 focus:outline"
              value={data.category}
              onChange={(e) =>
                setData({
                  ...data,
                  category: e.target.value,
                })
              }
            >
              <option value="">Select an option</option>
              <option value="HTML">HTML & CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="TypeScript">TypeScript</option>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
            <div className="h-2 text-red-500 text-sm">
              {errorMessages.category}
            </div>
            <label htmlFor="tags" className="w-fit mt-4 text-sm">
              Tags (1-5 tags)
            </label>
            <div className="flex mt-1">
              <input
                type="text"
                id="tags"
                className="rounded-l-md rounded-r-none text-black h-12 px-3 outline-red-400 outline-2 focus:outline w-full relative"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter') createTag();
                }}
                ref={tagsInputElement}
              />
              <div
                className="h-12 w-12 bg-neutral-200 rounded-r-md clickable-white flex items-center justify-center flex-shrink-0"
                onClick={(e) => createTag()}
              >
                <PlusIcon />
              </div>
            </div>
            {data.tags.length !== 0 && (
              <ul className="rounded-b-md p-2 bg-neutral-800 flex gap-2 flex-wrap overflow-x-auto">
                {data.tags.map((text: string) => {
                  return (
                    <li
                      className="rounded-md p-1 pl-2 bg-neutral-700 flex items-center w-fit"
                      key={text}
                    >
                      <span>{text}</span>
                      <span onClick={() => deleteTag(text)}>
                        <XIconStartSelling />
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
            <div className="h-2 text-red-500 text-sm">{errorMessages.tags}</div>
            <label htmlFor="price" className="w-fit mt-4 text-sm">
              Price
            </label>
            <input
              type="text"
              id="price"
              className="rounded-md text-black h-12 px-3 mt-1 outline-red-400 outline-2 focus:outline bg-neutral-300"
              value={`$${data.price}`}
              disabled={true}
              onChange={(e) =>
                setData({
                  ...data,
                  price: Number(e.target.value),
                })
              }
            />
            <div className="h-2 text-red-500 text-sm">
              {errorMessages.price}
            </div>
            <label htmlFor="description" className="w-fit mt-4 text-sm">
              Description
            </label>
            <textarea
              className="p-3 rounded-md mt-1 outline-red-400 outline-2 focus:outline"
              id="description"
              value={data.description}
              onChange={(e) =>
                setData({
                  ...data,
                  description: e.target.value,
                })
              }
            />
            <div className="h-2 text-red-500 text-sm">
              {errorMessages.description}
            </div>
            <label htmlFor="thumbnail" className="w-fit mt-4 text-sm">
              Thumbnail (16:9 image)
            </label>
            <input
              type="file"
              id="thumbnail"
              className="rounded-md text-black mt-1 outline-red-400 outline-2 focus:outline"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setData({
                    ...data,
                    thumbnail: e.target.files[0],
                  });
                } else {
                  setData({
                    ...data,
                    thumbnail: null,
                  });
                }
              }}
            />
            <div className="h-2 text-red-500 text-sm">
              {errorMessages.thumbnail}
            </div>
            <label htmlFor="images" className="w-fit mt-4 text-sm">
              Images (1-4 16:9 images)
            </label>
            <input
              type="file"
              id="images"
              className="rounded-md text-black mt-1 outline-red-400 outline-2 focus:outline"
              multiple
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  console.log(e.target.files);
                  setData({
                    ...data,
                    images: Array.from(e.target.files),
                  });
                } else {
                  setData({
                    ...data,
                    images: [],
                  });
                }
              }}
            />
            <div className="h-2 text-red-500 text-sm">
              {errorMessages.images}
            </div>
            <label htmlFor="files" className="w-fit mt-4 text-sm">
              Files (.zip file)
            </label>
            <input
              type="file"
              id="files"
              className="rounded-md text-black mt-1 outline-red-400 outline-2 focus:outline"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setData({
                    ...data,
                    files: e.target.files[0],
                  });
                } else {
                  setData({
                    ...data,
                    files: null,
                  });
                }
              }}
            />
            <div className="h-2 text-red-500 text-sm">
              {errorMessages.files}
            </div>
            <button
              className="bg-red-600 h-12 rounded-md mt-6 clickable"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        )}
      </main>
    </>
  );
}
export default StartSelling;
