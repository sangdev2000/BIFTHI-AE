<<<<<<< HEAD
///SANG NGUYEN
=======

///Instructions for pushing code to git and to hosting
1. Install Git
Make sure Git is installed on your system. You can check by running this command in your terminal:
git --version

2. Initialize a Git repository
Navigate to your project folder in your terminal and initialize a Git repository:

cd your-project-folder
git init

3. Create a GitHub repository:
 -Go to GitHub and log in.
 -Click the "+" button in the top-right corner and select New repository.
 -Name your repository and click Create repository.

 4. Connect the GitHub repository
Now, in your terminal, connect your local repository to the one you just created on GitHub:

git remote add origin https://github.com/your-username/your-repository-name.git

5. Add and commit your code
Add your project files to the staging area and commit them:
git add .
git commit -m "Initial commit"

6. Push your code to GitHub
Push the code to the GitHub repository:
git push -u origin master
 ================================================================
 Step 2: Deploy Your Code on Vercel
 1. Sign up and log in to Vercel
 Go to Vercel and sign up or log in with your GitHub account.

 2. Create a New Project
 --Click on the New Project button on your Vercel dashboard.
 --Select the GitHub repository you want to deploy (Vercel will ask for GitHub integration permissions if it’s your first time).
 3. Configure the project settings
 -Choose the root directory of your project (if required).
 -Set the framework preset (Next.js, React, or any other framework you are using).
 -Configure environment variables if needed.

 4. Deploy the project
 -Click Deploy to start the deployment process.
 -Vercel will automatically build and deploy your project.

 5. View the live site
 Once the deployment is complete, Vercel will provide you with a live URL where your site is hosted. You can access it via the URL given by Vercel.

 Additional Notes:
 -Vercel automatically redeploys your project whenever you push changes to the GitHub repository.
 -You can configure custom domains on Vercel through the dashboard.


 ======================================================================================

====> run project
--- npm start 

=========================================================================================

link deploy: https://bifthi-ae-ikve.vercel.app/


==========================================================================================



>>>>>>> devmain
