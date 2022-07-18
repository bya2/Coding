import Graph from ".";
import GraphNode from "../Entity/GraphNode";
import List from "../List";

export class TreeNode<D> {

}

// DAG (방향성 있는 비순환 그래프)
// 자체 간선 불가
// 계층 모델
// 노드가 n이면, 간선은 n-1
// 순회: DFS, BFS 안의 Pre-, In-, Post-order
// 파생: 이진 트리, 이진 탐색 트리, 균형 트리, 이진 힙

interface TreeInterface {
}

export default class Tree<D = any> extends Graph<D> implements TreeInterface{
}