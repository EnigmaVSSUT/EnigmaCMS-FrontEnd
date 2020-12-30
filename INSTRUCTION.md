# Instructions for contributing
Strictly Follow this guide to organize your code. we are using _components folder method_ i.e each components should have its own folder containing all the codes(css, js,etc) that it needs to execute. <br>

##File structure

Starting with **public** folder:- <br>
- keep this clean and put all the favicon in _favicon_ folder.
<br>

**Src** folder:- <br>
- _assets_ will be containing images,icons,logos and etc.
- _components_ this folder will contain each and every components with their own individual folder each containing their respective **Props** and **codes** that they need to run.
- _redux_ this folder will contain the codes for data management using redux.

### Attention:-

- The Folder named **global** inside the components folder will only contain the **props** that is accessed or needed by more than one components to render.
- Create individual folder for each global props. **Don't put** unnecessary codes or files like images logs in here.
- Their will be certain components that needs data to test the functionality in that case build a demo data in that **particular** _components or props_ folder and test it. After the backend is ready connect it using redux and remove the demo data.
- Make sure you are using the preferred packages as mentioned above.



<br> for any queries contact _Team Web || Enigma_.

### Happy contributing 🎉
