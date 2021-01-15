<?php

namespace App\Controller;

use App\Entity\Post;
use App\Repository\CommentRepository;
use App\Repository\PostRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    /**
     * @Route("/api/post", methods={"GET"})
     * @param PostRepository $postRepository
     * @return JsonResponse
     */
    public function list(PostRepository $postRepository)
    {
        // Gets all results as array recursively. @see App\Repository\PostRepository.
        $posts = $postRepository->findAllFinal();

        return new JsonResponse($posts);
    }

    /**
     * @Route("/api/post/{id}", methods={"GET"})
     * @param PostRepository $postRepository
     * @param int $id
     * @return JsonResponse
     */
    public function details(PostRepository $postRepository, int $id)
    {
        $post = $postRepository->findFinal($id);

        if (!$post) {
            return new JsonResponse(null, 404);
        }

        return new JsonResponse(current($post));
    }


     /**
      * @Route("/api/post", methods={"POST"})
      * @param Request $request
      * @param EntityManagerInterface $entityManager
      * @return JsonResponse
      */
    public function create(Request $request, EntityManagerInterface $entityManager)
    {
        try {
            $post = new Post();
            $data = json_decode($request->getContent(), true);

            if (!$post || !$data['title'] || !$data['content']) {
                throw new \Exception();
            }

            $post->setTitle($data['title']);
            $post->setContent($data['content']);
            $post->setHideComments(false);

            $entityManager->persist($post);
            $entityManager->flush();

            return new JsonResponse(null, 200);
        }
        catch (\Exception $e) {
            return new JsonResponse(null, 422);
        }
    }

    /**
     * @Route("/api/post/{id}", methods={"PUT"})
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param PostRepository $postRepository
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, EntityManagerInterface $entityManager, PostRepository $postRepository, int $id)
    {
        try {
            $post = $postRepository->find($id);
            $data = json_decode($request->getContent(), true);

            if (!$post || !$data['title'] || !$data['content']) {
                throw new \Exception();
            }

            $post->setTitle($data['title']);
            $post->setContent($data['content']);

            $entityManager->persist($post);
            $entityManager->flush();

            return new JsonResponse(null, 200);
        }
        catch (\Exception $e) {
            return new JsonResponse(null, 422);
        }
    }

    /**
     * @Route("/api/post/{id}", methods={"DELETE"})
     * @param EntityManagerInterface $entityManager
     * @param PostRepository $postRepository
     * @param CommentRepository $commentRepository
     * @param int $id
     * @return JsonResponse
     */
    public function delete(EntityManagerInterface $entityManager, PostRepository $postRepository, CommentRepository $commentRepository, int $id)
    {
        $post = $postRepository->find($id);
        $comments = $commentRepository->findBy(['postId' => $id]);

        if (!$post) {
            return new JsonResponse(null, 404);
        }

        if ($comments) {
            foreach ($comments as $comment) {
                $entityManager->remove($comment);
            }
        }

        $entityManager->remove($post);
        $entityManager->flush();

        return new JsonResponse(null, 200);
    }
}
