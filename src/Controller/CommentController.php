<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Repository\CommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CommentController extends AbstractController
{
    /**
     * @Route("/api/comment/{id}", methods={"GET"})
     * @param CommentRepository $commentRepository
     * @param int $id
     * @return JsonResponse
     */
    public function list(CommentRepository $commentRepository, int $id)
    {
        $comments = $commentRepository->findByFinal($id);

        return new JsonResponse($comments);
    }

     /**
      * @Route("/api/comment", methods={"POST"})
      * @param Request $request
      * @param EntityManagerInterface $entityManager
      * @return JsonResponse
      */
    public function create(Request $request, EntityManagerInterface $entityManager)
    {
        try {
            $comment = new Comment();
            $data = json_decode($request->getContent(), true);

            if (!$data['post_id'] || !$data['comment']) {
                throw new \Exception();
            }

            $comment->setPostId($data['post_id']);
            $comment->setComment($data['comment']);

            $entityManager->persist($comment);
            $entityManager->flush();

            return new JsonResponse(null, 201);
        }
        catch (\Exception $e) {
            return new JsonResponse(null, 422);
        }
    }
}
