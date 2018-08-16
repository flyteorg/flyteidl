import * as $protobuf from "protobufjs";
/** Namespace flyteidl. */
export namespace flyteidl {

    /** Namespace core. */
    namespace core {

        /** Properties of a ConnectionSet. */
        interface IConnectionSet {

            /** ConnectionSet downstream */
            downstream?: ({ [k: string]: flyteidl.core.ConnectionSet.IIdList }|null);

            /** ConnectionSet upstream */
            upstream?: ({ [k: string]: flyteidl.core.ConnectionSet.IIdList }|null);
        }

        /** Represents a ConnectionSet. */
        class ConnectionSet implements IConnectionSet {

            /**
             * Constructs a new ConnectionSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IConnectionSet);

            /** ConnectionSet downstream. */
            public downstream: { [k: string]: flyteidl.core.ConnectionSet.IIdList };

            /** ConnectionSet upstream. */
            public upstream: { [k: string]: flyteidl.core.ConnectionSet.IIdList };

            /**
             * Creates a new ConnectionSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConnectionSet instance
             */
            public static create(properties?: flyteidl.core.IConnectionSet): flyteidl.core.ConnectionSet;

            /**
             * Encodes the specified ConnectionSet message. Does not implicitly {@link flyteidl.core.ConnectionSet.verify|verify} messages.
             * @param message ConnectionSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IConnectionSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConnectionSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConnectionSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ConnectionSet;

            /**
             * Verifies a ConnectionSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ConnectionSet {

            /** Properties of an IdList. */
            interface IIdList {

                /** IdList ids */
                ids?: (string[]|null);
            }

            /** Represents an IdList. */
            class IdList implements IIdList {

                /**
                 * Constructs a new IdList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.core.ConnectionSet.IIdList);

                /** IdList ids. */
                public ids: string[];

                /**
                 * Creates a new IdList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IdList instance
                 */
                public static create(properties?: flyteidl.core.ConnectionSet.IIdList): flyteidl.core.ConnectionSet.IdList;

                /**
                 * Encodes the specified IdList message. Does not implicitly {@link flyteidl.core.ConnectionSet.IdList.verify|verify} messages.
                 * @param message IdList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.core.ConnectionSet.IIdList, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IdList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IdList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ConnectionSet.IdList;

                /**
                 * Verifies an IdList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a CompiledWorkflow. */
        interface ICompiledWorkflow {

            /** CompiledWorkflow template */
            template?: (flyteidl.core.IWorkflowTemplate|null);

            /** CompiledWorkflow connections */
            connections?: (flyteidl.core.IConnectionSet|null);
        }

        /** Represents a CompiledWorkflow. */
        class CompiledWorkflow implements ICompiledWorkflow {

            /**
             * Constructs a new CompiledWorkflow.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ICompiledWorkflow);

            /** CompiledWorkflow template. */
            public template?: (flyteidl.core.IWorkflowTemplate|null);

            /** CompiledWorkflow connections. */
            public connections?: (flyteidl.core.IConnectionSet|null);

            /**
             * Creates a new CompiledWorkflow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompiledWorkflow instance
             */
            public static create(properties?: flyteidl.core.ICompiledWorkflow): flyteidl.core.CompiledWorkflow;

            /**
             * Encodes the specified CompiledWorkflow message. Does not implicitly {@link flyteidl.core.CompiledWorkflow.verify|verify} messages.
             * @param message CompiledWorkflow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ICompiledWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompiledWorkflow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompiledWorkflow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.CompiledWorkflow;

            /**
             * Verifies a CompiledWorkflow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CompiledTask. */
        interface ICompiledTask {

            /** CompiledTask template */
            template?: (flyteidl.core.ITaskTemplate|null);
        }

        /** Represents a CompiledTask. */
        class CompiledTask implements ICompiledTask {

            /**
             * Constructs a new CompiledTask.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ICompiledTask);

            /** CompiledTask template. */
            public template?: (flyteidl.core.ITaskTemplate|null);

            /**
             * Creates a new CompiledTask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompiledTask instance
             */
            public static create(properties?: flyteidl.core.ICompiledTask): flyteidl.core.CompiledTask;

            /**
             * Encodes the specified CompiledTask message. Does not implicitly {@link flyteidl.core.CompiledTask.verify|verify} messages.
             * @param message CompiledTask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ICompiledTask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompiledTask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompiledTask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.CompiledTask;

            /**
             * Verifies a CompiledTask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CompiledWorkflowClosure. */
        interface ICompiledWorkflowClosure {

            /** CompiledWorkflowClosure primary */
            primary?: (flyteidl.core.ICompiledWorkflow|null);

            /** CompiledWorkflowClosure subWorkflows */
            subWorkflows?: (flyteidl.core.ICompiledWorkflow[]|null);

            /** CompiledWorkflowClosure tasks */
            tasks?: (flyteidl.core.ICompiledTask[]|null);
        }

        /** Represents a CompiledWorkflowClosure. */
        class CompiledWorkflowClosure implements ICompiledWorkflowClosure {

            /**
             * Constructs a new CompiledWorkflowClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ICompiledWorkflowClosure);

            /** CompiledWorkflowClosure primary. */
            public primary?: (flyteidl.core.ICompiledWorkflow|null);

            /** CompiledWorkflowClosure subWorkflows. */
            public subWorkflows: flyteidl.core.ICompiledWorkflow[];

            /** CompiledWorkflowClosure tasks. */
            public tasks: flyteidl.core.ICompiledTask[];

            /**
             * Creates a new CompiledWorkflowClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompiledWorkflowClosure instance
             */
            public static create(properties?: flyteidl.core.ICompiledWorkflowClosure): flyteidl.core.CompiledWorkflowClosure;

            /**
             * Encodes the specified CompiledWorkflowClosure message. Does not implicitly {@link flyteidl.core.CompiledWorkflowClosure.verify|verify} messages.
             * @param message CompiledWorkflowClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ICompiledWorkflowClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompiledWorkflowClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompiledWorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.CompiledWorkflowClosure;

            /**
             * Verifies a CompiledWorkflowClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an IfBlock. */
        interface IIfBlock {

            /** IfBlock condition */
            condition?: (flyteidl.core.IBooleanExpression|null);

            /** IfBlock thenNode */
            thenNode?: (flyteidl.core.INode|null);
        }

        /** Represents an IfBlock. */
        class IfBlock implements IIfBlock {

            /**
             * Constructs a new IfBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IIfBlock);

            /** IfBlock condition. */
            public condition?: (flyteidl.core.IBooleanExpression|null);

            /** IfBlock thenNode. */
            public thenNode?: (flyteidl.core.INode|null);

            /**
             * Creates a new IfBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IfBlock instance
             */
            public static create(properties?: flyteidl.core.IIfBlock): flyteidl.core.IfBlock;

            /**
             * Encodes the specified IfBlock message. Does not implicitly {@link flyteidl.core.IfBlock.verify|verify} messages.
             * @param message IfBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IIfBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IfBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IfBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.IfBlock;

            /**
             * Verifies an IfBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an IfElseBlock. */
        interface IIfElseBlock {

            /** IfElseBlock case */
            "case"?: (flyteidl.core.IIfBlock|null);

            /** IfElseBlock other */
            other?: (flyteidl.core.IIfBlock[]|null);

            /** IfElseBlock elseNode */
            elseNode?: (flyteidl.core.INode|null);

            /** IfElseBlock error */
            error?: (flyteidl.core.IError|null);
        }

        /** Represents an IfElseBlock. */
        class IfElseBlock implements IIfElseBlock {

            /**
             * Constructs a new IfElseBlock.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IIfElseBlock);

            /** IfElseBlock case. */
            public case?: (flyteidl.core.IIfBlock|null);

            /** IfElseBlock other. */
            public other: flyteidl.core.IIfBlock[];

            /** IfElseBlock elseNode. */
            public elseNode?: (flyteidl.core.INode|null);

            /** IfElseBlock error. */
            public error?: (flyteidl.core.IError|null);

            /** IfElseBlock default. */
            public default_?: ("elseNode"|"error");

            /**
             * Creates a new IfElseBlock instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IfElseBlock instance
             */
            public static create(properties?: flyteidl.core.IIfElseBlock): flyteidl.core.IfElseBlock;

            /**
             * Encodes the specified IfElseBlock message. Does not implicitly {@link flyteidl.core.IfElseBlock.verify|verify} messages.
             * @param message IfElseBlock message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IIfElseBlock, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IfElseBlock message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IfElseBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.IfElseBlock;

            /**
             * Verifies an IfElseBlock message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BranchNode. */
        interface IBranchNode {

            /** BranchNode ifElse */
            ifElse?: (flyteidl.core.IIfElseBlock|null);
        }

        /** Represents a BranchNode. */
        class BranchNode implements IBranchNode {

            /**
             * Constructs a new BranchNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBranchNode);

            /** BranchNode ifElse. */
            public ifElse?: (flyteidl.core.IIfElseBlock|null);

            /**
             * Creates a new BranchNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BranchNode instance
             */
            public static create(properties?: flyteidl.core.IBranchNode): flyteidl.core.BranchNode;

            /**
             * Encodes the specified BranchNode message. Does not implicitly {@link flyteidl.core.BranchNode.verify|verify} messages.
             * @param message BranchNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBranchNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BranchNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BranchNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BranchNode;

            /**
             * Verifies a BranchNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskNode. */
        interface ITaskNode {

            /** TaskNode referenceId */
            referenceId?: (string|null);
        }

        /** Represents a TaskNode. */
        class TaskNode implements ITaskNode {

            /**
             * Constructs a new TaskNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskNode);

            /** TaskNode referenceId. */
            public referenceId: string;

            /** TaskNode reference. */
            public reference?: "referenceId";

            /**
             * Creates a new TaskNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskNode instance
             */
            public static create(properties?: flyteidl.core.ITaskNode): flyteidl.core.TaskNode;

            /**
             * Encodes the specified TaskNode message. Does not implicitly {@link flyteidl.core.TaskNode.verify|verify} messages.
             * @param message TaskNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskNode;

            /**
             * Verifies a TaskNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowNode. */
        interface IWorkflowNode {

            /** WorkflowNode launchplanRef */
            launchplanRef?: (string|null);

            /** WorkflowNode subWorkflowRef */
            subWorkflowRef?: (string|null);
        }

        /** Represents a WorkflowNode. */
        class WorkflowNode implements IWorkflowNode {

            /**
             * Constructs a new WorkflowNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowNode);

            /** WorkflowNode launchplanRef. */
            public launchplanRef: string;

            /** WorkflowNode subWorkflowRef. */
            public subWorkflowRef: string;

            /** WorkflowNode reference. */
            public reference?: ("launchplanRef"|"subWorkflowRef");

            /**
             * Creates a new WorkflowNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowNode instance
             */
            public static create(properties?: flyteidl.core.IWorkflowNode): flyteidl.core.WorkflowNode;

            /**
             * Encodes the specified WorkflowNode message. Does not implicitly {@link flyteidl.core.WorkflowNode.verify|verify} messages.
             * @param message WorkflowNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowNode;

            /**
             * Verifies a WorkflowNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeMetadata. */
        interface INodeMetadata {

            /** NodeMetadata name */
            name?: (string|null);

            /** NodeMetadata timeout */
            timeout?: (google.protobuf.IDuration|null);

            /** NodeMetadata retries */
            retries?: (flyteidl.core.IRetryStrategy|null);
        }

        /** Represents a NodeMetadata. */
        class NodeMetadata implements INodeMetadata {

            /**
             * Constructs a new NodeMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.INodeMetadata);

            /** NodeMetadata name. */
            public name: string;

            /** NodeMetadata timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /** NodeMetadata retries. */
            public retries?: (flyteidl.core.IRetryStrategy|null);

            /**
             * Creates a new NodeMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeMetadata instance
             */
            public static create(properties?: flyteidl.core.INodeMetadata): flyteidl.core.NodeMetadata;

            /**
             * Encodes the specified NodeMetadata message. Does not implicitly {@link flyteidl.core.NodeMetadata.verify|verify} messages.
             * @param message NodeMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.INodeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.NodeMetadata;

            /**
             * Verifies a NodeMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Alias. */
        interface IAlias {

            /** Alias var */
            "var"?: (string|null);

            /** Alias alias */
            alias?: (string|null);
        }

        /** Represents an Alias. */
        class Alias implements IAlias {

            /**
             * Constructs a new Alias.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IAlias);

            /** Alias var. */
            public var: string;

            /** Alias alias. */
            public alias: string;

            /**
             * Creates a new Alias instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Alias instance
             */
            public static create(properties?: flyteidl.core.IAlias): flyteidl.core.Alias;

            /**
             * Encodes the specified Alias message. Does not implicitly {@link flyteidl.core.Alias.verify|verify} messages.
             * @param message Alias message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IAlias, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Alias message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Alias
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Alias;

            /**
             * Verifies an Alias message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Node. */
        interface INode {

            /** Node id */
            id?: (string|null);

            /** Node metadata */
            metadata?: (flyteidl.core.INodeMetadata|null);

            /** Node inputs */
            inputs?: (flyteidl.core.IBinding[]|null);

            /** Node upstreamNodeIds */
            upstreamNodeIds?: (string[]|null);

            /** Node outputAliases */
            outputAliases?: (flyteidl.core.IAlias[]|null);

            /** Node taskNode */
            taskNode?: (flyteidl.core.ITaskNode|null);

            /** Node workflowNode */
            workflowNode?: (flyteidl.core.IWorkflowNode|null);

            /** Node branchNode */
            branchNode?: (flyteidl.core.IBranchNode|null);
        }

        /** Represents a Node. */
        class Node implements INode {

            /**
             * Constructs a new Node.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.INode);

            /** Node id. */
            public id: string;

            /** Node metadata. */
            public metadata?: (flyteidl.core.INodeMetadata|null);

            /** Node inputs. */
            public inputs: flyteidl.core.IBinding[];

            /** Node upstreamNodeIds. */
            public upstreamNodeIds: string[];

            /** Node outputAliases. */
            public outputAliases: flyteidl.core.IAlias[];

            /** Node taskNode. */
            public taskNode?: (flyteidl.core.ITaskNode|null);

            /** Node workflowNode. */
            public workflowNode?: (flyteidl.core.IWorkflowNode|null);

            /** Node branchNode. */
            public branchNode?: (flyteidl.core.IBranchNode|null);

            /** Node target. */
            public target?: ("taskNode"|"workflowNode"|"branchNode");

            /**
             * Creates a new Node instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Node instance
             */
            public static create(properties?: flyteidl.core.INode): flyteidl.core.Node;

            /**
             * Encodes the specified Node message. Does not implicitly {@link flyteidl.core.Node.verify|verify} messages.
             * @param message Node message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.INode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Node message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Node
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Node;

            /**
             * Verifies a Node message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowMetadata. */
        interface IWorkflowMetadata {

            /** WorkflowMetadata executionRole */
            executionRole?: (string|null);
        }

        /** Represents a WorkflowMetadata. */
        class WorkflowMetadata implements IWorkflowMetadata {

            /**
             * Constructs a new WorkflowMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowMetadata);

            /** WorkflowMetadata executionRole. */
            public executionRole: string;

            /**
             * Creates a new WorkflowMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowMetadata instance
             */
            public static create(properties?: flyteidl.core.IWorkflowMetadata): flyteidl.core.WorkflowMetadata;

            /**
             * Encodes the specified WorkflowMetadata message. Does not implicitly {@link flyteidl.core.WorkflowMetadata.verify|verify} messages.
             * @param message WorkflowMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowMetadata;

            /**
             * Verifies a WorkflowMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowTemplate. */
        interface IWorkflowTemplate {

            /** WorkflowTemplate id */
            id?: (string|null);

            /** WorkflowTemplate metadata */
            metadata?: (flyteidl.core.IWorkflowMetadata|null);

            /** WorkflowTemplate interface */
            "interface"?: (flyteidl.core.ITypedInterface|null);

            /** WorkflowTemplate nodes */
            nodes?: (flyteidl.core.INode[]|null);

            /** WorkflowTemplate outputs */
            outputs?: (flyteidl.core.IBinding[]|null);

            /** WorkflowTemplate failureNode */
            failureNode?: (flyteidl.core.INode|null);
        }

        /** Represents a WorkflowTemplate. */
        class WorkflowTemplate implements IWorkflowTemplate {

            /**
             * Constructs a new WorkflowTemplate.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowTemplate);

            /** WorkflowTemplate id. */
            public id: string;

            /** WorkflowTemplate metadata. */
            public metadata?: (flyteidl.core.IWorkflowMetadata|null);

            /** WorkflowTemplate interface. */
            public interface?: (flyteidl.core.ITypedInterface|null);

            /** WorkflowTemplate nodes. */
            public nodes: flyteidl.core.INode[];

            /** WorkflowTemplate outputs. */
            public outputs: flyteidl.core.IBinding[];

            /** WorkflowTemplate failureNode. */
            public failureNode?: (flyteidl.core.INode|null);

            /**
             * Creates a new WorkflowTemplate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowTemplate instance
             */
            public static create(properties?: flyteidl.core.IWorkflowTemplate): flyteidl.core.WorkflowTemplate;

            /**
             * Encodes the specified WorkflowTemplate message. Does not implicitly {@link flyteidl.core.WorkflowTemplate.verify|verify} messages.
             * @param message WorkflowTemplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowTemplate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowTemplate;

            /**
             * Verifies a WorkflowTemplate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Variable. */
        interface IVariable {

            /** Variable type */
            type?: (flyteidl.core.ILiteralType|null);

            /** Variable description */
            description?: (string|null);
        }

        /** Represents a Variable. */
        class Variable implements IVariable {

            /**
             * Constructs a new Variable.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IVariable);

            /** Variable type. */
            public type?: (flyteidl.core.ILiteralType|null);

            /** Variable description. */
            public description: string;

            /**
             * Creates a new Variable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Variable instance
             */
            public static create(properties?: flyteidl.core.IVariable): flyteidl.core.Variable;

            /**
             * Encodes the specified Variable message. Does not implicitly {@link flyteidl.core.Variable.verify|verify} messages.
             * @param message Variable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IVariable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Variable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Variable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Variable;

            /**
             * Verifies a Variable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a VariableMap. */
        interface IVariableMap {

            /** VariableMap variables */
            variables?: ({ [k: string]: flyteidl.core.IVariable }|null);
        }

        /** Represents a VariableMap. */
        class VariableMap implements IVariableMap {

            /**
             * Constructs a new VariableMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IVariableMap);

            /** VariableMap variables. */
            public variables: { [k: string]: flyteidl.core.IVariable };

            /**
             * Creates a new VariableMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns VariableMap instance
             */
            public static create(properties?: flyteidl.core.IVariableMap): flyteidl.core.VariableMap;

            /**
             * Encodes the specified VariableMap message. Does not implicitly {@link flyteidl.core.VariableMap.verify|verify} messages.
             * @param message VariableMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IVariableMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a VariableMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns VariableMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.VariableMap;

            /**
             * Verifies a VariableMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Parameter. */
        interface IParameter {

            /** Parameter var */
            "var"?: (flyteidl.core.IVariable|null);

            /** Parameter default */
            "default"?: (flyteidl.core.ILiteral|null);

            /** Parameter required */
            required?: (boolean|null);
        }

        /** Represents a Parameter. */
        class Parameter implements IParameter {

            /**
             * Constructs a new Parameter.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IParameter);

            /** Parameter var. */
            public var?: (flyteidl.core.IVariable|null);

            /** Parameter default. */
            public default?: (flyteidl.core.ILiteral|null);

            /** Parameter required. */
            public required: boolean;

            /** Parameter behavior. */
            public behavior?: ("default"|"required");

            /**
             * Creates a new Parameter instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Parameter instance
             */
            public static create(properties?: flyteidl.core.IParameter): flyteidl.core.Parameter;

            /**
             * Encodes the specified Parameter message. Does not implicitly {@link flyteidl.core.Parameter.verify|verify} messages.
             * @param message Parameter message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IParameter, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Parameter message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Parameter
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Parameter;

            /**
             * Verifies a Parameter message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ParameterMap. */
        interface IParameterMap {

            /** ParameterMap parameters */
            parameters?: ({ [k: string]: flyteidl.core.IParameter }|null);
        }

        /** Represents a ParameterMap. */
        class ParameterMap implements IParameterMap {

            /**
             * Constructs a new ParameterMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IParameterMap);

            /** ParameterMap parameters. */
            public parameters: { [k: string]: flyteidl.core.IParameter };

            /**
             * Creates a new ParameterMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ParameterMap instance
             */
            public static create(properties?: flyteidl.core.IParameterMap): flyteidl.core.ParameterMap;

            /**
             * Encodes the specified ParameterMap message. Does not implicitly {@link flyteidl.core.ParameterMap.verify|verify} messages.
             * @param message ParameterMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IParameterMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ParameterMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ParameterMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ParameterMap;

            /**
             * Verifies a ParameterMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TypedInterface. */
        interface ITypedInterface {

            /** TypedInterface inputs */
            inputs?: (flyteidl.core.IVariableMap|null);

            /** TypedInterface outputs */
            outputs?: (flyteidl.core.IVariableMap|null);
        }

        /** Represents a TypedInterface. */
        class TypedInterface implements ITypedInterface {

            /**
             * Constructs a new TypedInterface.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITypedInterface);

            /** TypedInterface inputs. */
            public inputs?: (flyteidl.core.IVariableMap|null);

            /** TypedInterface outputs. */
            public outputs?: (flyteidl.core.IVariableMap|null);

            /**
             * Creates a new TypedInterface instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TypedInterface instance
             */
            public static create(properties?: flyteidl.core.ITypedInterface): flyteidl.core.TypedInterface;

            /**
             * Encodes the specified TypedInterface message. Does not implicitly {@link flyteidl.core.TypedInterface.verify|verify} messages.
             * @param message TypedInterface message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITypedInterface, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TypedInterface message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TypedInterface
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TypedInterface;

            /**
             * Verifies a TypedInterface message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** SimpleType enum. */
        enum SimpleType {
            NONE = 0,
            INTEGER = 1,
            FLOAT = 2,
            STRING = 3,
            BOOLEAN = 4,
            DATETIME = 5,
            DURATION = 6,
            BLOB = 7,
            BINARY = 8,
            WAITABLE = 9,
            ERROR = 10
        }

        /** Properties of a SchemaType. */
        interface ISchemaType {

            /** SchemaType columns */
            columns?: (flyteidl.core.SchemaType.ISchemaColumn[]|null);
        }

        /** Represents a SchemaType. */
        class SchemaType implements ISchemaType {

            /**
             * Constructs a new SchemaType.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ISchemaType);

            /** SchemaType columns. */
            public columns: flyteidl.core.SchemaType.ISchemaColumn[];

            /**
             * Creates a new SchemaType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SchemaType instance
             */
            public static create(properties?: flyteidl.core.ISchemaType): flyteidl.core.SchemaType;

            /**
             * Encodes the specified SchemaType message. Does not implicitly {@link flyteidl.core.SchemaType.verify|verify} messages.
             * @param message SchemaType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ISchemaType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SchemaType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SchemaType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.SchemaType;

            /**
             * Verifies a SchemaType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace SchemaType {

            /** Properties of a SchemaColumn. */
            interface ISchemaColumn {

                /** SchemaColumn name */
                name?: (string|null);

                /** SchemaColumn type */
                type?: (flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType|null);
            }

            /** Represents a SchemaColumn. */
            class SchemaColumn implements ISchemaColumn {

                /**
                 * Constructs a new SchemaColumn.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.core.SchemaType.ISchemaColumn);

                /** SchemaColumn name. */
                public name: string;

                /** SchemaColumn type. */
                public type: flyteidl.core.SchemaType.SchemaColumn.SchemaColumnType;

                /**
                 * Creates a new SchemaColumn instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SchemaColumn instance
                 */
                public static create(properties?: flyteidl.core.SchemaType.ISchemaColumn): flyteidl.core.SchemaType.SchemaColumn;

                /**
                 * Encodes the specified SchemaColumn message. Does not implicitly {@link flyteidl.core.SchemaType.SchemaColumn.verify|verify} messages.
                 * @param message SchemaColumn message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.core.SchemaType.ISchemaColumn, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SchemaColumn message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SchemaColumn
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.SchemaType.SchemaColumn;

                /**
                 * Verifies a SchemaColumn message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            namespace SchemaColumn {

                /** SchemaColumnType enum. */
                enum SchemaColumnType {
                    INTEGER = 0,
                    FLOAT = 1,
                    STRING = 2,
                    DATETIME = 3,
                    DURATION = 4,
                    BOOLEAN = 5
                }
            }
        }

        /** Properties of a LiteralType. */
        interface ILiteralType {

            /** LiteralType simple */
            simple?: (flyteidl.core.SimpleType|null);

            /** LiteralType schema */
            schema?: (flyteidl.core.ISchemaType|null);

            /** LiteralType collectionType */
            collectionType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType mapValueType */
            mapValueType?: (flyteidl.core.ILiteralType|null);
        }

        /** Represents a LiteralType. */
        class LiteralType implements ILiteralType {

            /**
             * Constructs a new LiteralType.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteralType);

            /** LiteralType simple. */
            public simple: flyteidl.core.SimpleType;

            /** LiteralType schema. */
            public schema?: (flyteidl.core.ISchemaType|null);

            /** LiteralType collectionType. */
            public collectionType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType mapValueType. */
            public mapValueType?: (flyteidl.core.ILiteralType|null);

            /** LiteralType type. */
            public type?: ("simple"|"schema"|"collectionType"|"mapValueType");

            /**
             * Creates a new LiteralType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralType instance
             */
            public static create(properties?: flyteidl.core.ILiteralType): flyteidl.core.LiteralType;

            /**
             * Encodes the specified LiteralType message. Does not implicitly {@link flyteidl.core.LiteralType.verify|verify} messages.
             * @param message LiteralType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteralType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.LiteralType;

            /**
             * Verifies a LiteralType message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an OutputReference. */
        interface IOutputReference {

            /** OutputReference nodeId */
            nodeId?: (string|null);

            /** OutputReference var */
            "var"?: (string|null);
        }

        /** Represents an OutputReference. */
        class OutputReference implements IOutputReference {

            /**
             * Constructs a new OutputReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IOutputReference);

            /** OutputReference nodeId. */
            public nodeId: string;

            /** OutputReference var. */
            public var: string;

            /**
             * Creates a new OutputReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OutputReference instance
             */
            public static create(properties?: flyteidl.core.IOutputReference): flyteidl.core.OutputReference;

            /**
             * Encodes the specified OutputReference message. Does not implicitly {@link flyteidl.core.OutputReference.verify|verify} messages.
             * @param message OutputReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IOutputReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OutputReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OutputReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.OutputReference;

            /**
             * Verifies an OutputReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Error. */
        interface IError {

            /** Error failedNodeId */
            failedNodeId?: (string|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IError);

            /** Error failedNodeId. */
            public failedNodeId: string;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: flyteidl.core.IError): flyteidl.core.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link flyteidl.core.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Primitive. */
        interface IPrimitive {

            /** Primitive integer */
            integer?: (Long|null);

            /** Primitive floatValue */
            floatValue?: (number|null);

            /** Primitive stringValue */
            stringValue?: (string|null);

            /** Primitive boolean */
            boolean?: (boolean|null);

            /** Primitive datetime */
            datetime?: (google.protobuf.ITimestamp|null);

            /** Primitive duration */
            duration?: (google.protobuf.IDuration|null);
        }

        /** Represents a Primitive. */
        class Primitive implements IPrimitive {

            /**
             * Constructs a new Primitive.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IPrimitive);

            /** Primitive integer. */
            public integer: Long;

            /** Primitive floatValue. */
            public floatValue: number;

            /** Primitive stringValue. */
            public stringValue: string;

            /** Primitive boolean. */
            public boolean: boolean;

            /** Primitive datetime. */
            public datetime?: (google.protobuf.ITimestamp|null);

            /** Primitive duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** Primitive value. */
            public value?: ("integer"|"floatValue"|"stringValue"|"boolean"|"datetime"|"duration");

            /**
             * Creates a new Primitive instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Primitive instance
             */
            public static create(properties?: flyteidl.core.IPrimitive): flyteidl.core.Primitive;

            /**
             * Encodes the specified Primitive message. Does not implicitly {@link flyteidl.core.Primitive.verify|verify} messages.
             * @param message Primitive message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IPrimitive, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Primitive message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Primitive
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Primitive;

            /**
             * Verifies a Primitive message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Void. */
        interface IVoid {
        }

        /** Represents a Void. */
        class Void implements IVoid {

            /**
             * Constructs a new Void.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IVoid);

            /**
             * Creates a new Void instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Void instance
             */
            public static create(properties?: flyteidl.core.IVoid): flyteidl.core.Void;

            /**
             * Encodes the specified Void message. Does not implicitly {@link flyteidl.core.Void.verify|verify} messages.
             * @param message Void message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IVoid, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Void message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Void
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Void;

            /**
             * Verifies a Void message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Blob. */
        interface IBlob {

            /** Blob metadata */
            metadata?: (flyteidl.core.IBlobMetadata|null);

            /** Blob uri */
            uri?: (string|null);
        }

        /** Represents a Blob. */
        class Blob implements IBlob {

            /**
             * Constructs a new Blob.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBlob);

            /** Blob metadata. */
            public metadata?: (flyteidl.core.IBlobMetadata|null);

            /** Blob uri. */
            public uri: string;

            /**
             * Creates a new Blob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Blob instance
             */
            public static create(properties?: flyteidl.core.IBlob): flyteidl.core.Blob;

            /**
             * Encodes the specified Blob message. Does not implicitly {@link flyteidl.core.Blob.verify|verify} messages.
             * @param message Blob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Blob message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Blob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Blob;

            /**
             * Verifies a Blob message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BlobMetadata. */
        interface IBlobMetadata {

            /** BlobMetadata format */
            format?: (string|null);

            /** BlobMetadata type */
            type?: (flyteidl.core.BlobMetadata.BlobType|null);
        }

        /** Represents a BlobMetadata. */
        class BlobMetadata implements IBlobMetadata {

            /**
             * Constructs a new BlobMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBlobMetadata);

            /** BlobMetadata format. */
            public format: string;

            /** BlobMetadata type. */
            public type: flyteidl.core.BlobMetadata.BlobType;

            /**
             * Creates a new BlobMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BlobMetadata instance
             */
            public static create(properties?: flyteidl.core.IBlobMetadata): flyteidl.core.BlobMetadata;

            /**
             * Encodes the specified BlobMetadata message. Does not implicitly {@link flyteidl.core.BlobMetadata.verify|verify} messages.
             * @param message BlobMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBlobMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BlobMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BlobMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BlobMetadata;

            /**
             * Verifies a BlobMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace BlobMetadata {

            /** BlobType enum. */
            enum BlobType {
                Single = 0,
                Multipart = 1
            }
        }

        /** Properties of a Waitable. */
        interface IWaitable {

            /** Waitable surrogateKey */
            surrogateKey?: (string|null);

            /** Waitable executionUri */
            executionUri?: (string|null);
        }

        /** Represents a Waitable. */
        class Waitable implements IWaitable {

            /**
             * Constructs a new Waitable.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWaitable);

            /** Waitable surrogateKey. */
            public surrogateKey: string;

            /** Waitable executionUri. */
            public executionUri: string;

            /**
             * Creates a new Waitable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Waitable instance
             */
            public static create(properties?: flyteidl.core.IWaitable): flyteidl.core.Waitable;

            /**
             * Encodes the specified Waitable message. Does not implicitly {@link flyteidl.core.Waitable.verify|verify} messages.
             * @param message Waitable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWaitable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Waitable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Waitable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Waitable;

            /**
             * Verifies a Waitable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Binary. */
        interface IBinary {

            /** Binary value */
            value?: (Uint8Array|null);

            /** Binary tag */
            tag?: (string|null);
        }

        /** Represents a Binary. */
        class Binary implements IBinary {

            /**
             * Constructs a new Binary.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBinary);

            /** Binary value. */
            public value: Uint8Array;

            /** Binary tag. */
            public tag: string;

            /**
             * Creates a new Binary instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Binary instance
             */
            public static create(properties?: flyteidl.core.IBinary): flyteidl.core.Binary;

            /**
             * Encodes the specified Binary message. Does not implicitly {@link flyteidl.core.Binary.verify|verify} messages.
             * @param message Binary message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBinary, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Binary message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Binary
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Binary;

            /**
             * Verifies a Binary message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Schema. */
        interface ISchema {

            /** Schema uri */
            uri?: (string|null);

            /** Schema type */
            type?: (flyteidl.core.ISchemaType|null);
        }

        /** Represents a Schema. */
        class Schema implements ISchema {

            /**
             * Constructs a new Schema.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ISchema);

            /** Schema uri. */
            public uri: string;

            /** Schema type. */
            public type?: (flyteidl.core.ISchemaType|null);

            /**
             * Creates a new Schema instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Schema instance
             */
            public static create(properties?: flyteidl.core.ISchema): flyteidl.core.Schema;

            /**
             * Encodes the specified Schema message. Does not implicitly {@link flyteidl.core.Schema.verify|verify} messages.
             * @param message Schema message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ISchema, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Schema message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Schema
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Schema;

            /**
             * Verifies a Schema message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Scalar. */
        interface IScalar {

            /** Scalar primitive */
            primitive?: (flyteidl.core.IPrimitive|null);

            /** Scalar blob */
            blob?: (flyteidl.core.IBlob|null);

            /** Scalar binary */
            binary?: (flyteidl.core.IBinary|null);

            /** Scalar schema */
            schema?: (flyteidl.core.ISchema|null);

            /** Scalar noneType */
            noneType?: (flyteidl.core.IVoid|null);

            /** Scalar waitable */
            waitable?: (flyteidl.core.IWaitable|null);

            /** Scalar error */
            error?: (flyteidl.core.IError|null);
        }

        /** Represents a Scalar. */
        class Scalar implements IScalar {

            /**
             * Constructs a new Scalar.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IScalar);

            /** Scalar primitive. */
            public primitive?: (flyteidl.core.IPrimitive|null);

            /** Scalar blob. */
            public blob?: (flyteidl.core.IBlob|null);

            /** Scalar binary. */
            public binary?: (flyteidl.core.IBinary|null);

            /** Scalar schema. */
            public schema?: (flyteidl.core.ISchema|null);

            /** Scalar noneType. */
            public noneType?: (flyteidl.core.IVoid|null);

            /** Scalar waitable. */
            public waitable?: (flyteidl.core.IWaitable|null);

            /** Scalar error. */
            public error?: (flyteidl.core.IError|null);

            /** Scalar value. */
            public value?: ("primitive"|"blob"|"binary"|"schema"|"noneType"|"waitable"|"error");

            /**
             * Creates a new Scalar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Scalar instance
             */
            public static create(properties?: flyteidl.core.IScalar): flyteidl.core.Scalar;

            /**
             * Encodes the specified Scalar message. Does not implicitly {@link flyteidl.core.Scalar.verify|verify} messages.
             * @param message Scalar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IScalar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Scalar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Scalar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Scalar;

            /**
             * Verifies a Scalar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Literal. */
        interface ILiteral {

            /** Literal scalar */
            scalar?: (flyteidl.core.IScalar|null);

            /** Literal collection */
            collection?: (flyteidl.core.ILiteralCollection|null);

            /** Literal map */
            map?: (flyteidl.core.ILiteralMap|null);
        }

        /** Represents a Literal. */
        class Literal implements ILiteral {

            /**
             * Constructs a new Literal.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteral);

            /** Literal scalar. */
            public scalar?: (flyteidl.core.IScalar|null);

            /** Literal collection. */
            public collection?: (flyteidl.core.ILiteralCollection|null);

            /** Literal map. */
            public map?: (flyteidl.core.ILiteralMap|null);

            /** Literal value. */
            public value?: ("scalar"|"collection"|"map");

            /**
             * Creates a new Literal instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Literal instance
             */
            public static create(properties?: flyteidl.core.ILiteral): flyteidl.core.Literal;

            /**
             * Encodes the specified Literal message. Does not implicitly {@link flyteidl.core.Literal.verify|verify} messages.
             * @param message Literal message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteral, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Literal message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Literal
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Literal;

            /**
             * Verifies a Literal message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LiteralCollection. */
        interface ILiteralCollection {

            /** LiteralCollection literals */
            literals?: (flyteidl.core.ILiteral[]|null);
        }

        /** Represents a LiteralCollection. */
        class LiteralCollection implements ILiteralCollection {

            /**
             * Constructs a new LiteralCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteralCollection);

            /** LiteralCollection literals. */
            public literals: flyteidl.core.ILiteral[];

            /**
             * Creates a new LiteralCollection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralCollection instance
             */
            public static create(properties?: flyteidl.core.ILiteralCollection): flyteidl.core.LiteralCollection;

            /**
             * Encodes the specified LiteralCollection message. Does not implicitly {@link flyteidl.core.LiteralCollection.verify|verify} messages.
             * @param message LiteralCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteralCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.LiteralCollection;

            /**
             * Verifies a LiteralCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LiteralMap. */
        interface ILiteralMap {

            /** LiteralMap literals */
            literals?: ({ [k: string]: flyteidl.core.ILiteral }|null);
        }

        /** Represents a LiteralMap. */
        class LiteralMap implements ILiteralMap {

            /**
             * Constructs a new LiteralMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ILiteralMap);

            /** LiteralMap literals. */
            public literals: { [k: string]: flyteidl.core.ILiteral };

            /**
             * Creates a new LiteralMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralMap instance
             */
            public static create(properties?: flyteidl.core.ILiteralMap): flyteidl.core.LiteralMap;

            /**
             * Encodes the specified LiteralMap message. Does not implicitly {@link flyteidl.core.LiteralMap.verify|verify} messages.
             * @param message LiteralMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ILiteralMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.LiteralMap;

            /**
             * Verifies a LiteralMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BindingDataCollection. */
        interface IBindingDataCollection {

            /** BindingDataCollection bindings */
            bindings?: (flyteidl.core.IBindingData[]|null);
        }

        /** Represents a BindingDataCollection. */
        class BindingDataCollection implements IBindingDataCollection {

            /**
             * Constructs a new BindingDataCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBindingDataCollection);

            /** BindingDataCollection bindings. */
            public bindings: flyteidl.core.IBindingData[];

            /**
             * Creates a new BindingDataCollection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BindingDataCollection instance
             */
            public static create(properties?: flyteidl.core.IBindingDataCollection): flyteidl.core.BindingDataCollection;

            /**
             * Encodes the specified BindingDataCollection message. Does not implicitly {@link flyteidl.core.BindingDataCollection.verify|verify} messages.
             * @param message BindingDataCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBindingDataCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BindingDataCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BindingDataCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BindingDataCollection;

            /**
             * Verifies a BindingDataCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BindingDataMap. */
        interface IBindingDataMap {

            /** BindingDataMap bindings */
            bindings?: ({ [k: string]: flyteidl.core.IBindingData }|null);
        }

        /** Represents a BindingDataMap. */
        class BindingDataMap implements IBindingDataMap {

            /**
             * Constructs a new BindingDataMap.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBindingDataMap);

            /** BindingDataMap bindings. */
            public bindings: { [k: string]: flyteidl.core.IBindingData };

            /**
             * Creates a new BindingDataMap instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BindingDataMap instance
             */
            public static create(properties?: flyteidl.core.IBindingDataMap): flyteidl.core.BindingDataMap;

            /**
             * Encodes the specified BindingDataMap message. Does not implicitly {@link flyteidl.core.BindingDataMap.verify|verify} messages.
             * @param message BindingDataMap message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBindingDataMap, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BindingDataMap message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BindingDataMap
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BindingDataMap;

            /**
             * Verifies a BindingDataMap message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BindingData. */
        interface IBindingData {

            /** BindingData scalar */
            scalar?: (flyteidl.core.IScalar|null);

            /** BindingData collection */
            collection?: (flyteidl.core.IBindingDataCollection|null);

            /** BindingData promise */
            promise?: (flyteidl.core.IOutputReference|null);

            /** BindingData map */
            map?: (flyteidl.core.IBindingDataMap|null);
        }

        /** Represents a BindingData. */
        class BindingData implements IBindingData {

            /**
             * Constructs a new BindingData.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBindingData);

            /** BindingData scalar. */
            public scalar?: (flyteidl.core.IScalar|null);

            /** BindingData collection. */
            public collection?: (flyteidl.core.IBindingDataCollection|null);

            /** BindingData promise. */
            public promise?: (flyteidl.core.IOutputReference|null);

            /** BindingData map. */
            public map?: (flyteidl.core.IBindingDataMap|null);

            /** BindingData value. */
            public value?: ("scalar"|"collection"|"promise"|"map");

            /**
             * Creates a new BindingData instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BindingData instance
             */
            public static create(properties?: flyteidl.core.IBindingData): flyteidl.core.BindingData;

            /**
             * Encodes the specified BindingData message. Does not implicitly {@link flyteidl.core.BindingData.verify|verify} messages.
             * @param message BindingData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBindingData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BindingData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BindingData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BindingData;

            /**
             * Verifies a BindingData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Binding. */
        interface IBinding {

            /** Binding var */
            "var"?: (string|null);

            /** Binding binding */
            binding?: (flyteidl.core.IBindingData|null);
        }

        /** Represents a Binding. */
        class Binding implements IBinding {

            /**
             * Constructs a new Binding.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBinding);

            /** Binding var. */
            public var: string;

            /** Binding binding. */
            public binding?: (flyteidl.core.IBindingData|null);

            /**
             * Creates a new Binding instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Binding instance
             */
            public static create(properties?: flyteidl.core.IBinding): flyteidl.core.Binding;

            /**
             * Encodes the specified Binding message. Does not implicitly {@link flyteidl.core.Binding.verify|verify} messages.
             * @param message Binding message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Binding message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Binding
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Binding;

            /**
             * Verifies a Binding message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a KeyValuePair. */
        interface IKeyValuePair {

            /** KeyValuePair key */
            key?: (string|null);

            /** KeyValuePair value */
            value?: (string|null);
        }

        /** Represents a KeyValuePair. */
        class KeyValuePair implements IKeyValuePair {

            /**
             * Constructs a new KeyValuePair.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IKeyValuePair);

            /** KeyValuePair key. */
            public key: string;

            /** KeyValuePair value. */
            public value: string;

            /**
             * Creates a new KeyValuePair instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyValuePair instance
             */
            public static create(properties?: flyteidl.core.IKeyValuePair): flyteidl.core.KeyValuePair;

            /**
             * Encodes the specified KeyValuePair message. Does not implicitly {@link flyteidl.core.KeyValuePair.verify|verify} messages.
             * @param message KeyValuePair message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyValuePair message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyValuePair
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.KeyValuePair;

            /**
             * Verifies a KeyValuePair message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RetryStrategy. */
        interface IRetryStrategy {

            /** RetryStrategy retries */
            retries?: (number|null);
        }

        /** Represents a RetryStrategy. */
        class RetryStrategy implements IRetryStrategy {

            /**
             * Constructs a new RetryStrategy.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IRetryStrategy);

            /** RetryStrategy retries. */
            public retries: number;

            /**
             * Creates a new RetryStrategy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RetryStrategy instance
             */
            public static create(properties?: flyteidl.core.IRetryStrategy): flyteidl.core.RetryStrategy;

            /**
             * Encodes the specified RetryStrategy message. Does not implicitly {@link flyteidl.core.RetryStrategy.verify|verify} messages.
             * @param message RetryStrategy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IRetryStrategy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RetryStrategy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RetryStrategy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.RetryStrategy;

            /**
             * Verifies a RetryStrategy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ComparisonExpression. */
        interface IComparisonExpression {

            /** ComparisonExpression operator */
            operator?: (flyteidl.core.ComparisonExpression.Operator|null);

            /** ComparisonExpression leftValue */
            leftValue?: (flyteidl.core.IOperand|null);

            /** ComparisonExpression rightValue */
            rightValue?: (flyteidl.core.IOperand|null);
        }

        /** Represents a ComparisonExpression. */
        class ComparisonExpression implements IComparisonExpression {

            /**
             * Constructs a new ComparisonExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IComparisonExpression);

            /** ComparisonExpression operator. */
            public operator: flyteidl.core.ComparisonExpression.Operator;

            /** ComparisonExpression leftValue. */
            public leftValue?: (flyteidl.core.IOperand|null);

            /** ComparisonExpression rightValue. */
            public rightValue?: (flyteidl.core.IOperand|null);

            /**
             * Creates a new ComparisonExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ComparisonExpression instance
             */
            public static create(properties?: flyteidl.core.IComparisonExpression): flyteidl.core.ComparisonExpression;

            /**
             * Encodes the specified ComparisonExpression message. Does not implicitly {@link flyteidl.core.ComparisonExpression.verify|verify} messages.
             * @param message ComparisonExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IComparisonExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ComparisonExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ComparisonExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ComparisonExpression;

            /**
             * Verifies a ComparisonExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ComparisonExpression {

            /** Operator enum. */
            enum Operator {
                EQ = 0,
                NEQ = 1,
                GT = 2,
                GTE = 3,
                LT = 4,
                LTE = 5
            }
        }

        /** Properties of an Operand. */
        interface IOperand {

            /** Operand primitive */
            primitive?: (flyteidl.core.IPrimitive|null);

            /** Operand var */
            "var"?: (string|null);
        }

        /** Represents an Operand. */
        class Operand implements IOperand {

            /**
             * Constructs a new Operand.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IOperand);

            /** Operand primitive. */
            public primitive?: (flyteidl.core.IPrimitive|null);

            /** Operand var. */
            public var: string;

            /** Operand val. */
            public val?: ("primitive"|"var");

            /**
             * Creates a new Operand instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operand instance
             */
            public static create(properties?: flyteidl.core.IOperand): flyteidl.core.Operand;

            /**
             * Encodes the specified Operand message. Does not implicitly {@link flyteidl.core.Operand.verify|verify} messages.
             * @param message Operand message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IOperand, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operand message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Operand;

            /**
             * Verifies an Operand message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a BooleanExpression. */
        interface IBooleanExpression {

            /** BooleanExpression conjunction */
            conjunction?: (flyteidl.core.IConjunctionExpression|null);

            /** BooleanExpression comparison */
            comparison?: (flyteidl.core.IComparisonExpression|null);
        }

        /** Represents a BooleanExpression. */
        class BooleanExpression implements IBooleanExpression {

            /**
             * Constructs a new BooleanExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IBooleanExpression);

            /** BooleanExpression conjunction. */
            public conjunction?: (flyteidl.core.IConjunctionExpression|null);

            /** BooleanExpression comparison. */
            public comparison?: (flyteidl.core.IComparisonExpression|null);

            /** BooleanExpression expr. */
            public expr?: ("conjunction"|"comparison");

            /**
             * Creates a new BooleanExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BooleanExpression instance
             */
            public static create(properties?: flyteidl.core.IBooleanExpression): flyteidl.core.BooleanExpression;

            /**
             * Encodes the specified BooleanExpression message. Does not implicitly {@link flyteidl.core.BooleanExpression.verify|verify} messages.
             * @param message BooleanExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IBooleanExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BooleanExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BooleanExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.BooleanExpression;

            /**
             * Verifies a BooleanExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ConjunctionExpression. */
        interface IConjunctionExpression {

            /** ConjunctionExpression operator */
            operator?: (flyteidl.core.ConjunctionExpression.LogicalOperator|null);

            /** ConjunctionExpression leftExpression */
            leftExpression?: (flyteidl.core.IBooleanExpression|null);

            /** ConjunctionExpression rightExpression */
            rightExpression?: (flyteidl.core.IBooleanExpression|null);
        }

        /** Represents a ConjunctionExpression. */
        class ConjunctionExpression implements IConjunctionExpression {

            /**
             * Constructs a new ConjunctionExpression.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IConjunctionExpression);

            /** ConjunctionExpression operator. */
            public operator: flyteidl.core.ConjunctionExpression.LogicalOperator;

            /** ConjunctionExpression leftExpression. */
            public leftExpression?: (flyteidl.core.IBooleanExpression|null);

            /** ConjunctionExpression rightExpression. */
            public rightExpression?: (flyteidl.core.IBooleanExpression|null);

            /**
             * Creates a new ConjunctionExpression instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConjunctionExpression instance
             */
            public static create(properties?: flyteidl.core.IConjunctionExpression): flyteidl.core.ConjunctionExpression;

            /**
             * Encodes the specified ConjunctionExpression message. Does not implicitly {@link flyteidl.core.ConjunctionExpression.verify|verify} messages.
             * @param message ConjunctionExpression message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IConjunctionExpression, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConjunctionExpression message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConjunctionExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ConjunctionExpression;

            /**
             * Verifies a ConjunctionExpression message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ConjunctionExpression {

            /** LogicalOperator enum. */
            enum LogicalOperator {
                AND = 0,
                OR = 1
            }
        }

        /** TaskCategory enum. */
        enum TaskCategory {
            SingleStepTask = 0,
            MultiStepTask = 1
        }

        /** Properties of a Resources. */
        interface IResources {

            /** Resources requests */
            requests?: (flyteidl.core.Resources.IResourceEntry[]|null);

            /** Resources limits */
            limits?: (flyteidl.core.Resources.IResourceEntry[]|null);
        }

        /** Represents a Resources. */
        class Resources implements IResources {

            /**
             * Constructs a new Resources.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IResources);

            /** Resources requests. */
            public requests: flyteidl.core.Resources.IResourceEntry[];

            /** Resources limits. */
            public limits: flyteidl.core.Resources.IResourceEntry[];

            /**
             * Creates a new Resources instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Resources instance
             */
            public static create(properties?: flyteidl.core.IResources): flyteidl.core.Resources;

            /**
             * Encodes the specified Resources message. Does not implicitly {@link flyteidl.core.Resources.verify|verify} messages.
             * @param message Resources message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IResources, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Resources message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Resources
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Resources;

            /**
             * Verifies a Resources message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace Resources {

            /** ResourceName enum. */
            enum ResourceName {
                Unknown = 0,
                Cpu = 1,
                Gpu = 2,
                Memory = 3,
                Storage = 4
            }

            /** Properties of a ResourceEntry. */
            interface IResourceEntry {

                /** ResourceEntry name */
                name?: (flyteidl.core.Resources.ResourceName|null);

                /** ResourceEntry value */
                value?: (string|null);
            }

            /** Represents a ResourceEntry. */
            class ResourceEntry implements IResourceEntry {

                /**
                 * Constructs a new ResourceEntry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.core.Resources.IResourceEntry);

                /** ResourceEntry name. */
                public name: flyteidl.core.Resources.ResourceName;

                /** ResourceEntry value. */
                public value: string;

                /**
                 * Creates a new ResourceEntry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResourceEntry instance
                 */
                public static create(properties?: flyteidl.core.Resources.IResourceEntry): flyteidl.core.Resources.ResourceEntry;

                /**
                 * Encodes the specified ResourceEntry message. Does not implicitly {@link flyteidl.core.Resources.ResourceEntry.verify|verify} messages.
                 * @param message ResourceEntry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.core.Resources.IResourceEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ResourceEntry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResourceEntry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Resources.ResourceEntry;

                /**
                 * Verifies a ResourceEntry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a RuntimeMetadata. */
        interface IRuntimeMetadata {

            /** RuntimeMetadata type */
            type?: (flyteidl.core.RuntimeMetadata.RuntimeType|null);

            /** RuntimeMetadata version */
            version?: (string|null);

            /** RuntimeMetadata flavor */
            flavor?: (string|null);
        }

        /** Represents a RuntimeMetadata. */
        class RuntimeMetadata implements IRuntimeMetadata {

            /**
             * Constructs a new RuntimeMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IRuntimeMetadata);

            /** RuntimeMetadata type. */
            public type: flyteidl.core.RuntimeMetadata.RuntimeType;

            /** RuntimeMetadata version. */
            public version: string;

            /** RuntimeMetadata flavor. */
            public flavor: string;

            /**
             * Creates a new RuntimeMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RuntimeMetadata instance
             */
            public static create(properties?: flyteidl.core.IRuntimeMetadata): flyteidl.core.RuntimeMetadata;

            /**
             * Encodes the specified RuntimeMetadata message. Does not implicitly {@link flyteidl.core.RuntimeMetadata.verify|verify} messages.
             * @param message RuntimeMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IRuntimeMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RuntimeMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RuntimeMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.RuntimeMetadata;

            /**
             * Verifies a RuntimeMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace RuntimeMetadata {

            /** RuntimeType enum. */
            enum RuntimeType {
                Other = 0,
                FlyteSDK = 1
            }
        }

        /** Properties of a TaskMetadata. */
        interface ITaskMetadata {

            /** TaskMetadata discoverable */
            discoverable?: (boolean|null);

            /** TaskMetadata runtime */
            runtime?: (flyteidl.core.IRuntimeMetadata|null);

            /** TaskMetadata timeout */
            timeout?: (google.protobuf.IDuration|null);

            /** TaskMetadata retries */
            retries?: (flyteidl.core.IRetryStrategy|null);
        }

        /** Represents a TaskMetadata. */
        class TaskMetadata implements ITaskMetadata {

            /**
             * Constructs a new TaskMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskMetadata);

            /** TaskMetadata discoverable. */
            public discoverable: boolean;

            /** TaskMetadata runtime. */
            public runtime?: (flyteidl.core.IRuntimeMetadata|null);

            /** TaskMetadata timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /** TaskMetadata retries. */
            public retries?: (flyteidl.core.IRetryStrategy|null);

            /**
             * Creates a new TaskMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskMetadata instance
             */
            public static create(properties?: flyteidl.core.ITaskMetadata): flyteidl.core.TaskMetadata;

            /**
             * Encodes the specified TaskMetadata message. Does not implicitly {@link flyteidl.core.TaskMetadata.verify|verify} messages.
             * @param message TaskMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskMetadata;

            /**
             * Verifies a TaskMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskTemplate. */
        interface ITaskTemplate {

            /** TaskTemplate id */
            id?: (string|null);

            /** TaskTemplate category */
            category?: (flyteidl.core.TaskCategory|null);

            /** TaskTemplate type */
            type?: (string|null);

            /** TaskTemplate metadata */
            metadata?: (flyteidl.core.ITaskMetadata|null);

            /** TaskTemplate interface */
            "interface"?: (flyteidl.core.ITypedInterface|null);

            /** TaskTemplate custom */
            custom?: (Uint8Array|null);

            /** TaskTemplate container */
            container?: (flyteidl.core.IContainer|null);
        }

        /** Represents a TaskTemplate. */
        class TaskTemplate implements ITaskTemplate {

            /**
             * Constructs a new TaskTemplate.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ITaskTemplate);

            /** TaskTemplate id. */
            public id: string;

            /** TaskTemplate category. */
            public category: flyteidl.core.TaskCategory;

            /** TaskTemplate type. */
            public type: string;

            /** TaskTemplate metadata. */
            public metadata?: (flyteidl.core.ITaskMetadata|null);

            /** TaskTemplate interface. */
            public interface?: (flyteidl.core.ITypedInterface|null);

            /** TaskTemplate custom. */
            public custom: Uint8Array;

            /** TaskTemplate container. */
            public container?: (flyteidl.core.IContainer|null);

            /** TaskTemplate target. */
            public target?: "container";

            /**
             * Creates a new TaskTemplate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskTemplate instance
             */
            public static create(properties?: flyteidl.core.ITaskTemplate): flyteidl.core.TaskTemplate;

            /**
             * Encodes the specified TaskTemplate message. Does not implicitly {@link flyteidl.core.TaskTemplate.verify|verify} messages.
             * @param message TaskTemplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ITaskTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskTemplate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskTemplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.TaskTemplate;

            /**
             * Verifies a TaskTemplate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ContainerPort. */
        interface IContainerPort {

            /** ContainerPort containerPort */
            containerPort?: (number|null);
        }

        /** Represents a ContainerPort. */
        class ContainerPort implements IContainerPort {

            /**
             * Constructs a new ContainerPort.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IContainerPort);

            /** ContainerPort containerPort. */
            public containerPort: number;

            /**
             * Creates a new ContainerPort instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContainerPort instance
             */
            public static create(properties?: flyteidl.core.IContainerPort): flyteidl.core.ContainerPort;

            /**
             * Encodes the specified ContainerPort message. Does not implicitly {@link flyteidl.core.ContainerPort.verify|verify} messages.
             * @param message ContainerPort message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IContainerPort, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContainerPort message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContainerPort
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ContainerPort;

            /**
             * Verifies a ContainerPort message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Container. */
        interface IContainer {

            /** Container image */
            image?: (string|null);

            /** Container command */
            command?: (string[]|null);

            /** Container args */
            args?: (string[]|null);

            /** Container resources */
            resources?: (flyteidl.core.IResources|null);

            /** Container env */
            env?: (flyteidl.core.IKeyValuePair[]|null);

            /** Container config */
            config?: (flyteidl.core.IKeyValuePair[]|null);

            /** Container ports */
            ports?: (flyteidl.core.IContainerPort[]|null);
        }

        /** Represents a Container. */
        class Container implements IContainer {

            /**
             * Constructs a new Container.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IContainer);

            /** Container image. */
            public image: string;

            /** Container command. */
            public command: string[];

            /** Container args. */
            public args: string[];

            /** Container resources. */
            public resources?: (flyteidl.core.IResources|null);

            /** Container env. */
            public env: flyteidl.core.IKeyValuePair[];

            /** Container config. */
            public config: flyteidl.core.IKeyValuePair[];

            /** Container ports. */
            public ports: flyteidl.core.IContainerPort[];

            /**
             * Creates a new Container instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Container instance
             */
            public static create(properties?: flyteidl.core.IContainer): flyteidl.core.Container;

            /**
             * Encodes the specified Container message. Does not implicitly {@link flyteidl.core.Container.verify|verify} messages.
             * @param message Container message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Container message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Container
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.Container;

            /**
             * Verifies a Container message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ContainerError. */
        interface IContainerError {

            /** ContainerError code */
            code?: (string|null);

            /** ContainerError message */
            message?: (string|null);

            /** ContainerError kind */
            kind?: (flyteidl.core.ContainerError.Kind|null);
        }

        /** Represents a ContainerError. */
        class ContainerError implements IContainerError {

            /**
             * Constructs a new ContainerError.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IContainerError);

            /** ContainerError code. */
            public code: string;

            /** ContainerError message. */
            public message: string;

            /** ContainerError kind. */
            public kind: flyteidl.core.ContainerError.Kind;

            /**
             * Creates a new ContainerError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContainerError instance
             */
            public static create(properties?: flyteidl.core.IContainerError): flyteidl.core.ContainerError;

            /**
             * Encodes the specified ContainerError message. Does not implicitly {@link flyteidl.core.ContainerError.verify|verify} messages.
             * @param message ContainerError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IContainerError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContainerError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContainerError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ContainerError;

            /**
             * Verifies a ContainerError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ContainerError {

            /** Kind enum. */
            enum Kind {
                NON_RECOVERABLE = 0,
                RECOVERABLE = 1
            }
        }

        /** Properties of an ErrorDocument. */
        interface IErrorDocument {

            /** ErrorDocument error */
            error?: (flyteidl.core.IContainerError|null);
        }

        /** Represents an ErrorDocument. */
        class ErrorDocument implements IErrorDocument {

            /**
             * Constructs a new ErrorDocument.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IErrorDocument);

            /** ErrorDocument error. */
            public error?: (flyteidl.core.IContainerError|null);

            /**
             * Creates a new ErrorDocument instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorDocument instance
             */
            public static create(properties?: flyteidl.core.IErrorDocument): flyteidl.core.ErrorDocument;

            /**
             * Encodes the specified ErrorDocument message. Does not implicitly {@link flyteidl.core.ErrorDocument.verify|verify} messages.
             * @param message ErrorDocument message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IErrorDocument, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorDocument message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorDocument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ErrorDocument;

            /**
             * Verifies an ErrorDocument message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FutureTaskDocument. */
        interface IFutureTaskDocument {

            /** FutureTaskDocument tasks */
            tasks?: (flyteidl.core.IFutureTaskNode[]|null);

            /** FutureTaskDocument minSuccesses */
            minSuccesses?: (Long|null);

            /** FutureTaskDocument outputs */
            outputs?: (flyteidl.core.IBinding[]|null);
        }

        /** Represents a FutureTaskDocument. */
        class FutureTaskDocument implements IFutureTaskDocument {

            /**
             * Constructs a new FutureTaskDocument.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IFutureTaskDocument);

            /** FutureTaskDocument tasks. */
            public tasks: flyteidl.core.IFutureTaskNode[];

            /** FutureTaskDocument minSuccesses. */
            public minSuccesses: Long;

            /** FutureTaskDocument outputs. */
            public outputs: flyteidl.core.IBinding[];

            /**
             * Creates a new FutureTaskDocument instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FutureTaskDocument instance
             */
            public static create(properties?: flyteidl.core.IFutureTaskDocument): flyteidl.core.FutureTaskDocument;

            /**
             * Encodes the specified FutureTaskDocument message. Does not implicitly {@link flyteidl.core.FutureTaskDocument.verify|verify} messages.
             * @param message FutureTaskDocument message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IFutureTaskDocument, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FutureTaskDocument message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FutureTaskDocument
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.FutureTaskDocument;

            /**
             * Verifies a FutureTaskDocument message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FutureTaskNode. */
        interface IFutureTaskNode {

            /** FutureTaskNode generateId */
            generateId?: (string|null);

            /** FutureTaskNode array */
            array?: (flyteidl.core.IArrayJob|null);

            /** FutureTaskNode hiveQueries */
            hiveQueries?: (flyteidl.core.IHiveQueryCollection|null);
        }

        /** Represents a FutureTaskNode. */
        class FutureTaskNode implements IFutureTaskNode {

            /**
             * Constructs a new FutureTaskNode.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IFutureTaskNode);

            /** FutureTaskNode generateId. */
            public generateId: string;

            /** FutureTaskNode array. */
            public array?: (flyteidl.core.IArrayJob|null);

            /** FutureTaskNode hiveQueries. */
            public hiveQueries?: (flyteidl.core.IHiveQueryCollection|null);

            /** FutureTaskNode target. */
            public target?: ("array"|"hiveQueries");

            /**
             * Creates a new FutureTaskNode instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FutureTaskNode instance
             */
            public static create(properties?: flyteidl.core.IFutureTaskNode): flyteidl.core.FutureTaskNode;

            /**
             * Encodes the specified FutureTaskNode message. Does not implicitly {@link flyteidl.core.FutureTaskNode.verify|verify} messages.
             * @param message FutureTaskNode message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IFutureTaskNode, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FutureTaskNode message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FutureTaskNode
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.FutureTaskNode;

            /**
             * Verifies a FutureTaskNode message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a HiveQuery. */
        interface IHiveQuery {

            /** HiveQuery query */
            query?: (string|null);

            /** HiveQuery metadata */
            metadata?: (flyteidl.core.ITaskMetadata|null);
        }

        /** Represents a HiveQuery. */
        class HiveQuery implements IHiveQuery {

            /**
             * Constructs a new HiveQuery.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IHiveQuery);

            /** HiveQuery query. */
            public query: string;

            /** HiveQuery metadata. */
            public metadata?: (flyteidl.core.ITaskMetadata|null);

            /**
             * Creates a new HiveQuery instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HiveQuery instance
             */
            public static create(properties?: flyteidl.core.IHiveQuery): flyteidl.core.HiveQuery;

            /**
             * Encodes the specified HiveQuery message. Does not implicitly {@link flyteidl.core.HiveQuery.verify|verify} messages.
             * @param message HiveQuery message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IHiveQuery, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HiveQuery message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HiveQuery
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.HiveQuery;

            /**
             * Verifies a HiveQuery message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a HiveQueryCollection. */
        interface IHiveQueryCollection {

            /** HiveQueryCollection queries */
            queries?: (flyteidl.core.IHiveQuery[]|null);
        }

        /** Represents a HiveQueryCollection. */
        class HiveQueryCollection implements IHiveQueryCollection {

            /**
             * Constructs a new HiveQueryCollection.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IHiveQueryCollection);

            /** HiveQueryCollection queries. */
            public queries: flyteidl.core.IHiveQuery[];

            /**
             * Creates a new HiveQueryCollection instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HiveQueryCollection instance
             */
            public static create(properties?: flyteidl.core.IHiveQueryCollection): flyteidl.core.HiveQueryCollection;

            /**
             * Encodes the specified HiveQueryCollection message. Does not implicitly {@link flyteidl.core.HiveQueryCollection.verify|verify} messages.
             * @param message HiveQueryCollection message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IHiveQueryCollection, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HiveQueryCollection message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HiveQueryCollection
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.HiveQueryCollection;

            /**
             * Verifies a HiveQueryCollection message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a SwarmDefinition. */
        interface ISwarmDefinition {

            /** SwarmDefinition primaryContainer */
            primaryContainer?: (flyteidl.core.IContainer|null);

            /** SwarmDefinition initContainers */
            initContainers?: (flyteidl.core.IContainer[]|null);

            /** SwarmDefinition sidecarContainers */
            sidecarContainers?: (flyteidl.core.IContainer[]|null);
        }

        /** Represents a SwarmDefinition. */
        class SwarmDefinition implements ISwarmDefinition {

            /**
             * Constructs a new SwarmDefinition.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.ISwarmDefinition);

            /** SwarmDefinition primaryContainer. */
            public primaryContainer?: (flyteidl.core.IContainer|null);

            /** SwarmDefinition initContainers. */
            public initContainers: flyteidl.core.IContainer[];

            /** SwarmDefinition sidecarContainers. */
            public sidecarContainers: flyteidl.core.IContainer[];

            /**
             * Creates a new SwarmDefinition instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SwarmDefinition instance
             */
            public static create(properties?: flyteidl.core.ISwarmDefinition): flyteidl.core.SwarmDefinition;

            /**
             * Encodes the specified SwarmDefinition message. Does not implicitly {@link flyteidl.core.SwarmDefinition.verify|verify} messages.
             * @param message SwarmDefinition message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.ISwarmDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SwarmDefinition message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SwarmDefinition
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.SwarmDefinition;

            /**
             * Verifies a SwarmDefinition message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ArrayJob. */
        interface IArrayJob {

            /** ArrayJob metadata */
            metadata?: (flyteidl.core.ITaskMetadata|null);

            /** ArrayJob slots */
            slots?: (Long|null);

            /** ArrayJob completions */
            completions?: (Long|null);

            /** ArrayJob container */
            container?: (flyteidl.core.IContainer|null);

            /** ArrayJob swarm */
            swarm?: (flyteidl.core.ISwarmDefinition|null);

            /** ArrayJob inputRef */
            inputRef?: (string|null);
        }

        /** Represents an ArrayJob. */
        class ArrayJob implements IArrayJob {

            /**
             * Constructs a new ArrayJob.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IArrayJob);

            /** ArrayJob metadata. */
            public metadata?: (flyteidl.core.ITaskMetadata|null);

            /** ArrayJob slots. */
            public slots: Long;

            /** ArrayJob completions. */
            public completions: Long;

            /** ArrayJob container. */
            public container?: (flyteidl.core.IContainer|null);

            /** ArrayJob swarm. */
            public swarm?: (flyteidl.core.ISwarmDefinition|null);

            /** ArrayJob inputRef. */
            public inputRef: string;

            /** ArrayJob runnable. */
            public runnable?: ("container"|"swarm");

            /**
             * Creates a new ArrayJob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ArrayJob instance
             */
            public static create(properties?: flyteidl.core.IArrayJob): flyteidl.core.ArrayJob;

            /**
             * Encodes the specified ArrayJob message. Does not implicitly {@link flyteidl.core.ArrayJob.verify|verify} messages.
             * @param message ArrayJob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IArrayJob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ArrayJob message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ArrayJob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.ArrayJob;

            /**
             * Verifies an ArrayJob message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowClosure. */
        interface IWorkflowClosure {

            /** WorkflowClosure workflow */
            workflow?: (flyteidl.core.IWorkflowTemplate|null);

            /** WorkflowClosure tasks */
            tasks?: (flyteidl.core.ITaskTemplate[]|null);
        }

        /** Represents a WorkflowClosure. */
        class WorkflowClosure implements IWorkflowClosure {

            /**
             * Constructs a new WorkflowClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.core.IWorkflowClosure);

            /** WorkflowClosure workflow. */
            public workflow?: (flyteidl.core.IWorkflowTemplate|null);

            /** WorkflowClosure tasks. */
            public tasks: flyteidl.core.ITaskTemplate[];

            /**
             * Creates a new WorkflowClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowClosure instance
             */
            public static create(properties?: flyteidl.core.IWorkflowClosure): flyteidl.core.WorkflowClosure;

            /**
             * Encodes the specified WorkflowClosure message. Does not implicitly {@link flyteidl.core.WorkflowClosure.verify|verify} messages.
             * @param message WorkflowClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.core.IWorkflowClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.core.WorkflowClosure;

            /**
             * Verifies a WorkflowClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace admin. */
    namespace admin {

        /** Properties of an Identifier. */
        interface IIdentifier {

            /** Identifier project */
            project?: (string|null);

            /** Identifier domain */
            domain?: (string|null);

            /** Identifier name */
            name?: (string|null);
        }

        /** Represents an Identifier. */
        class Identifier implements IIdentifier {

            /**
             * Constructs a new Identifier.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IIdentifier);

            /** Identifier project. */
            public project: string;

            /** Identifier domain. */
            public domain: string;

            /** Identifier name. */
            public name: string;

            /**
             * Creates a new Identifier instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Identifier instance
             */
            public static create(properties?: flyteidl.admin.IIdentifier): flyteidl.admin.Identifier;

            /**
             * Encodes the specified Identifier message. Does not implicitly {@link flyteidl.admin.Identifier.verify|verify} messages.
             * @param message Identifier message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Identifier message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Identifier
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Identifier;

            /**
             * Verifies an Identifier message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an IdentifierListRequest. */
        interface IIdentifierListRequest {

            /** IdentifierListRequest project */
            project?: (string|null);

            /** IdentifierListRequest domain */
            domain?: (string|null);
        }

        /** Represents an IdentifierListRequest. */
        class IdentifierListRequest implements IIdentifierListRequest {

            /**
             * Constructs a new IdentifierListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IIdentifierListRequest);

            /** IdentifierListRequest project. */
            public project: string;

            /** IdentifierListRequest domain. */
            public domain: string;

            /**
             * Creates a new IdentifierListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IdentifierListRequest instance
             */
            public static create(properties?: flyteidl.admin.IIdentifierListRequest): flyteidl.admin.IdentifierListRequest;

            /**
             * Encodes the specified IdentifierListRequest message. Does not implicitly {@link flyteidl.admin.IdentifierListRequest.verify|verify} messages.
             * @param message IdentifierListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IIdentifierListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IdentifierListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IdentifierListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.IdentifierListRequest;

            /**
             * Verifies an IdentifierListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an IdentifierList. */
        interface IIdentifierList {

            /** IdentifierList entities */
            entities?: (flyteidl.admin.IIdentifier[]|null);
        }

        /** Represents an IdentifierList. */
        class IdentifierList implements IIdentifierList {

            /**
             * Constructs a new IdentifierList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IIdentifierList);

            /** IdentifierList entities. */
            public entities: flyteidl.admin.IIdentifier[];

            /**
             * Creates a new IdentifierList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns IdentifierList instance
             */
            public static create(properties?: flyteidl.admin.IIdentifierList): flyteidl.admin.IdentifierList;

            /**
             * Encodes the specified IdentifierList message. Does not implicitly {@link flyteidl.admin.IdentifierList.verify|verify} messages.
             * @param message IdentifierList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IIdentifierList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an IdentifierList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IdentifierList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.IdentifierList;

            /**
             * Verifies an IdentifierList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ObjectGetRequest. */
        interface IObjectGetRequest {

            /** ObjectGetRequest urn */
            urn?: (string|null);
        }

        /** Represents an ObjectGetRequest. */
        class ObjectGetRequest implements IObjectGetRequest {

            /**
             * Constructs a new ObjectGetRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IObjectGetRequest);

            /** ObjectGetRequest urn. */
            public urn: string;

            /**
             * Creates a new ObjectGetRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ObjectGetRequest instance
             */
            public static create(properties?: flyteidl.admin.IObjectGetRequest): flyteidl.admin.ObjectGetRequest;

            /**
             * Encodes the specified ObjectGetRequest message. Does not implicitly {@link flyteidl.admin.ObjectGetRequest.verify|verify} messages.
             * @param message ObjectGetRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IObjectGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ObjectGetRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ObjectGetRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ObjectGetRequest;

            /**
             * Verifies an ObjectGetRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ResourceListRequest. */
        interface IResourceListRequest {

            /** ResourceListRequest id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** ResourceListRequest limit */
            limit?: (number|null);

            /** ResourceListRequest offset */
            offset?: (number|null);

            /** ResourceListRequest filters */
            filters?: (string|null);
        }

        /** Represents a ResourceListRequest. */
        class ResourceListRequest implements IResourceListRequest {

            /**
             * Constructs a new ResourceListRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IResourceListRequest);

            /** ResourceListRequest id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** ResourceListRequest limit. */
            public limit: number;

            /** ResourceListRequest offset. */
            public offset: number;

            /** ResourceListRequest filters. */
            public filters: string;

            /**
             * Creates a new ResourceListRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceListRequest instance
             */
            public static create(properties?: flyteidl.admin.IResourceListRequest): flyteidl.admin.ResourceListRequest;

            /**
             * Encodes the specified ResourceListRequest message. Does not implicitly {@link flyteidl.admin.ResourceListRequest.verify|verify} messages.
             * @param message ResourceListRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IResourceListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceListRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceListRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ResourceListRequest;

            /**
             * Verifies a ResourceListRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** ExecutionPhase enum. */
        enum ExecutionPhase {
            UNDEFINED = 0,
            RUNNING = 1,
            SUCCEEDED = 2,
            FAILED = 3,
            TIMED_OUT = 4,
            ABORTED = 5,
            QUEUED = 6
        }

        /** Properties of an Error. */
        interface IError {

            /** Error code */
            code?: (string|null);

            /** Error message */
            message?: (string|null);
        }

        /** Represents an Error. */
        class Error implements IError {

            /**
             * Constructs a new Error.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IError);

            /** Error code. */
            public code: string;

            /** Error message. */
            public message: string;

            /**
             * Creates a new Error instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Error instance
             */
            public static create(properties?: flyteidl.admin.IError): flyteidl.admin.Error;

            /**
             * Encodes the specified Error message. Does not implicitly {@link flyteidl.admin.Error.verify|verify} messages.
             * @param message Error message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Error message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Error;

            /**
             * Verifies an Error message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Notification. */
        interface INotification {

            /** Notification type */
            type?: (flyteidl.admin.Notification.Type|null);

            /** Notification phases */
            phases?: (flyteidl.admin.ExecutionPhase[]|null);
        }

        /** Represents a Notification. */
        class Notification implements INotification {

            /**
             * Constructs a new Notification.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INotification);

            /** Notification type. */
            public type: flyteidl.admin.Notification.Type;

            /** Notification phases. */
            public phases: flyteidl.admin.ExecutionPhase[];

            /**
             * Creates a new Notification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Notification instance
             */
            public static create(properties?: flyteidl.admin.INotification): flyteidl.admin.Notification;

            /**
             * Encodes the specified Notification message. Does not implicitly {@link flyteidl.admin.Notification.verify|verify} messages.
             * @param message Notification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INotification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Notification;

            /**
             * Verifies a Notification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace Notification {

            /** Type enum. */
            enum Type {
                UNDEFINED = 0,
                EMAIL = 1,
                PAGER_DUTY = 2,
                SLACK = 3
            }
        }

        /** Properties of an ExecutionCreateRequest. */
        interface IExecutionCreateRequest {

            /** ExecutionCreateRequest id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** ExecutionCreateRequest spec */
            spec?: (flyteidl.admin.IExecutionSpec|null);
        }

        /** Represents an ExecutionCreateRequest. */
        class ExecutionCreateRequest implements IExecutionCreateRequest {

            /**
             * Constructs a new ExecutionCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionCreateRequest);

            /** ExecutionCreateRequest id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** ExecutionCreateRequest spec. */
            public spec?: (flyteidl.admin.IExecutionSpec|null);

            /**
             * Creates a new ExecutionCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.IExecutionCreateRequest): flyteidl.admin.ExecutionCreateRequest;

            /**
             * Encodes the specified ExecutionCreateRequest message. Does not implicitly {@link flyteidl.admin.ExecutionCreateRequest.verify|verify} messages.
             * @param message ExecutionCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionCreateRequest;

            /**
             * Verifies an ExecutionCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionCreateResponse. */
        interface IExecutionCreateResponse {

            /** ExecutionCreateResponse urn */
            urn?: (string|null);
        }

        /** Represents an ExecutionCreateResponse. */
        class ExecutionCreateResponse implements IExecutionCreateResponse {

            /**
             * Constructs a new ExecutionCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionCreateResponse);

            /** ExecutionCreateResponse urn. */
            public urn: string;

            /**
             * Creates a new ExecutionCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.IExecutionCreateResponse): flyteidl.admin.ExecutionCreateResponse;

            /**
             * Encodes the specified ExecutionCreateResponse message. Does not implicitly {@link flyteidl.admin.ExecutionCreateResponse.verify|verify} messages.
             * @param message ExecutionCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionCreateResponse;

            /**
             * Verifies an ExecutionCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an Execution. */
        interface IExecution {

            /** Execution id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** Execution executionId */
            executionId?: (string|null);

            /** Execution status */
            status?: (flyteidl.admin.IExecutionStatus|null);

            /** Execution spec */
            spec?: (flyteidl.admin.IExecutionSpec|null);

            /** Execution result */
            result?: (flyteidl.admin.IExecutionResult|null);
        }

        /** Represents an Execution. */
        class Execution implements IExecution {

            /**
             * Constructs a new Execution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecution);

            /** Execution id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** Execution executionId. */
            public executionId: string;

            /** Execution status. */
            public status?: (flyteidl.admin.IExecutionStatus|null);

            /** Execution spec. */
            public spec?: (flyteidl.admin.IExecutionSpec|null);

            /** Execution result. */
            public result?: (flyteidl.admin.IExecutionResult|null);

            /**
             * Creates a new Execution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Execution instance
             */
            public static create(properties?: flyteidl.admin.IExecution): flyteidl.admin.Execution;

            /**
             * Encodes the specified Execution message. Does not implicitly {@link flyteidl.admin.Execution.verify|verify} messages.
             * @param message Execution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Execution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Execution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Execution;

            /**
             * Verifies an Execution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionList. */
        interface IExecutionList {

            /** ExecutionList executions */
            executions?: (flyteidl.admin.IExecution[]|null);
        }

        /** Represents an ExecutionList. */
        class ExecutionList implements IExecutionList {

            /**
             * Constructs a new ExecutionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionList);

            /** ExecutionList executions. */
            public executions: flyteidl.admin.IExecution[];

            /**
             * Creates a new ExecutionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionList instance
             */
            public static create(properties?: flyteidl.admin.IExecutionList): flyteidl.admin.ExecutionList;

            /**
             * Encodes the specified ExecutionList message. Does not implicitly {@link flyteidl.admin.ExecutionList.verify|verify} messages.
             * @param message ExecutionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionList;

            /**
             * Verifies an ExecutionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionStatus. */
        interface IExecutionStatus {

            /** ExecutionStatus phase */
            phase?: (flyteidl.admin.ExecutionPhase|null);

            /** ExecutionStatus workflowUrn */
            workflowUrn?: (string|null);
        }

        /** Represents an ExecutionStatus. */
        class ExecutionStatus implements IExecutionStatus {

            /**
             * Constructs a new ExecutionStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionStatus);

            /** ExecutionStatus phase. */
            public phase: flyteidl.admin.ExecutionPhase;

            /** ExecutionStatus workflowUrn. */
            public workflowUrn: string;

            /**
             * Creates a new ExecutionStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionStatus instance
             */
            public static create(properties?: flyteidl.admin.IExecutionStatus): flyteidl.admin.ExecutionStatus;

            /**
             * Encodes the specified ExecutionStatus message. Does not implicitly {@link flyteidl.admin.ExecutionStatus.verify|verify} messages.
             * @param message ExecutionStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionStatus;

            /**
             * Verifies an ExecutionStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LiteralMapBlob. */
        interface ILiteralMapBlob {

            /** LiteralMapBlob values */
            values?: (flyteidl.core.ILiteralMap|null);

            /** LiteralMapBlob uri */
            uri?: (string|null);
        }

        /** Represents a LiteralMapBlob. */
        class LiteralMapBlob implements ILiteralMapBlob {

            /**
             * Constructs a new LiteralMapBlob.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILiteralMapBlob);

            /** LiteralMapBlob values. */
            public values?: (flyteidl.core.ILiteralMap|null);

            /** LiteralMapBlob uri. */
            public uri: string;

            /** LiteralMapBlob data. */
            public data?: ("values"|"uri");

            /**
             * Creates a new LiteralMapBlob instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiteralMapBlob instance
             */
            public static create(properties?: flyteidl.admin.ILiteralMapBlob): flyteidl.admin.LiteralMapBlob;

            /**
             * Encodes the specified LiteralMapBlob message. Does not implicitly {@link flyteidl.admin.LiteralMapBlob.verify|verify} messages.
             * @param message LiteralMapBlob message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILiteralMapBlob, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiteralMapBlob message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiteralMapBlob
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LiteralMapBlob;

            /**
             * Verifies a LiteralMapBlob message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionResult. */
        interface IExecutionResult {

            /** ExecutionResult outputs */
            outputs?: (flyteidl.admin.ILiteralMapBlob|null);

            /** ExecutionResult error */
            error?: (flyteidl.admin.IError|null);
        }

        /** Represents an ExecutionResult. */
        class ExecutionResult implements IExecutionResult {

            /**
             * Constructs a new ExecutionResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionResult);

            /** ExecutionResult outputs. */
            public outputs?: (flyteidl.admin.ILiteralMapBlob|null);

            /** ExecutionResult error. */
            public error?: (flyteidl.admin.IError|null);

            /** ExecutionResult outputResult. */
            public outputResult?: ("outputs"|"error");

            /**
             * Creates a new ExecutionResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionResult instance
             */
            public static create(properties?: flyteidl.admin.IExecutionResult): flyteidl.admin.ExecutionResult;

            /**
             * Encodes the specified ExecutionResult message. Does not implicitly {@link flyteidl.admin.ExecutionResult.verify|verify} messages.
             * @param message ExecutionResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionResult;

            /**
             * Verifies an ExecutionResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an ExecutionMetadata. */
        interface IExecutionMetadata {

            /** ExecutionMetadata mode */
            mode?: (flyteidl.admin.ExecutionMetadata.ExecutionMode|null);

            /** ExecutionMetadata principal */
            principal?: (string|null);

            /** ExecutionMetadata nesting */
            nesting?: (number|null);
        }

        /** Represents an ExecutionMetadata. */
        class ExecutionMetadata implements IExecutionMetadata {

            /**
             * Constructs a new ExecutionMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionMetadata);

            /** ExecutionMetadata mode. */
            public mode: flyteidl.admin.ExecutionMetadata.ExecutionMode;

            /** ExecutionMetadata principal. */
            public principal: string;

            /** ExecutionMetadata nesting. */
            public nesting: number;

            /**
             * Creates a new ExecutionMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionMetadata instance
             */
            public static create(properties?: flyteidl.admin.IExecutionMetadata): flyteidl.admin.ExecutionMetadata;

            /**
             * Encodes the specified ExecutionMetadata message. Does not implicitly {@link flyteidl.admin.ExecutionMetadata.verify|verify} messages.
             * @param message ExecutionMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionMetadata;

            /**
             * Verifies an ExecutionMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace ExecutionMetadata {

            /** ExecutionMode enum. */
            enum ExecutionMode {
                MANUAL = 0,
                SCHEDULED = 1,
                SYSTEM = 2
            }
        }

        /** Properties of an ExecutionSpec. */
        interface IExecutionSpec {

            /** ExecutionSpec launchPlanUrn */
            launchPlanUrn?: (string|null);

            /** ExecutionSpec inputs */
            inputs?: (flyteidl.core.ILiteralMap|null);

            /** ExecutionSpec metadata */
            metadata?: (flyteidl.admin.IExecutionMetadata|null);

            /** ExecutionSpec notifications */
            notifications?: (flyteidl.admin.INotification[]|null);
        }

        /** Represents an ExecutionSpec. */
        class ExecutionSpec implements IExecutionSpec {

            /**
             * Constructs a new ExecutionSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IExecutionSpec);

            /** ExecutionSpec launchPlanUrn. */
            public launchPlanUrn: string;

            /** ExecutionSpec inputs. */
            public inputs?: (flyteidl.core.ILiteralMap|null);

            /** ExecutionSpec metadata. */
            public metadata?: (flyteidl.admin.IExecutionMetadata|null);

            /** ExecutionSpec notifications. */
            public notifications: flyteidl.admin.INotification[];

            /**
             * Creates a new ExecutionSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExecutionSpec instance
             */
            public static create(properties?: flyteidl.admin.IExecutionSpec): flyteidl.admin.ExecutionSpec;

            /**
             * Encodes the specified ExecutionSpec message. Does not implicitly {@link flyteidl.admin.ExecutionSpec.verify|verify} messages.
             * @param message ExecutionSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IExecutionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExecutionSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExecutionSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.ExecutionSpec;

            /**
             * Verifies an ExecutionSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanCreateRequest. */
        interface ILaunchPlanCreateRequest {

            /** LaunchPlanCreateRequest id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** LaunchPlanCreateRequest version */
            version?: (string|null);

            /** LaunchPlanCreateRequest spec */
            spec?: (flyteidl.admin.ILaunchPlanSpec|null);
        }

        /** Represents a LaunchPlanCreateRequest. */
        class LaunchPlanCreateRequest implements ILaunchPlanCreateRequest {

            /**
             * Constructs a new LaunchPlanCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanCreateRequest);

            /** LaunchPlanCreateRequest id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** LaunchPlanCreateRequest version. */
            public version: string;

            /** LaunchPlanCreateRequest spec. */
            public spec?: (flyteidl.admin.ILaunchPlanSpec|null);

            /**
             * Creates a new LaunchPlanCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanCreateRequest): flyteidl.admin.LaunchPlanCreateRequest;

            /**
             * Encodes the specified LaunchPlanCreateRequest message. Does not implicitly {@link flyteidl.admin.LaunchPlanCreateRequest.verify|verify} messages.
             * @param message LaunchPlanCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanCreateRequest;

            /**
             * Verifies a LaunchPlanCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanCreateResponse. */
        interface ILaunchPlanCreateResponse {

            /** LaunchPlanCreateResponse urn */
            urn?: (string|null);
        }

        /** Represents a LaunchPlanCreateResponse. */
        class LaunchPlanCreateResponse implements ILaunchPlanCreateResponse {

            /**
             * Constructs a new LaunchPlanCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanCreateResponse);

            /** LaunchPlanCreateResponse urn. */
            public urn: string;

            /**
             * Creates a new LaunchPlanCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanCreateResponse): flyteidl.admin.LaunchPlanCreateResponse;

            /**
             * Encodes the specified LaunchPlanCreateResponse message. Does not implicitly {@link flyteidl.admin.LaunchPlanCreateResponse.verify|verify} messages.
             * @param message LaunchPlanCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanCreateResponse;

            /**
             * Verifies a LaunchPlanCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** LaunchPlanState enum. */
        enum LaunchPlanState {
            INACTIVE = 0,
            ACTIVE = 1
        }

        /** Properties of a LaunchPlan. */
        interface ILaunchPlan {

            /** LaunchPlan id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** LaunchPlan version */
            version?: (string|null);

            /** LaunchPlan urn */
            urn?: (string|null);

            /** LaunchPlan spec */
            spec?: (flyteidl.admin.ILaunchPlanSpec|null);

            /** LaunchPlan closure */
            closure?: (flyteidl.admin.ILaunchPlanClosure|null);
        }

        /** Represents a LaunchPlan. */
        class LaunchPlan implements ILaunchPlan {

            /**
             * Constructs a new LaunchPlan.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlan);

            /** LaunchPlan id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** LaunchPlan version. */
            public version: string;

            /** LaunchPlan urn. */
            public urn: string;

            /** LaunchPlan spec. */
            public spec?: (flyteidl.admin.ILaunchPlanSpec|null);

            /** LaunchPlan closure. */
            public closure?: (flyteidl.admin.ILaunchPlanClosure|null);

            /**
             * Creates a new LaunchPlan instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlan instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlan): flyteidl.admin.LaunchPlan;

            /**
             * Encodes the specified LaunchPlan message. Does not implicitly {@link flyteidl.admin.LaunchPlan.verify|verify} messages.
             * @param message LaunchPlan message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlan, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlan message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlan
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlan;

            /**
             * Verifies a LaunchPlan message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanList. */
        interface ILaunchPlanList {

            /** LaunchPlanList launchPlans */
            launchPlans?: (flyteidl.admin.ILaunchPlan[]|null);
        }

        /** Represents a LaunchPlanList. */
        class LaunchPlanList implements ILaunchPlanList {

            /**
             * Constructs a new LaunchPlanList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanList);

            /** LaunchPlanList launchPlans. */
            public launchPlans: flyteidl.admin.ILaunchPlan[];

            /**
             * Creates a new LaunchPlanList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanList instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanList): flyteidl.admin.LaunchPlanList;

            /**
             * Encodes the specified LaunchPlanList message. Does not implicitly {@link flyteidl.admin.LaunchPlanList.verify|verify} messages.
             * @param message LaunchPlanList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanList;

            /**
             * Verifies a LaunchPlanList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanSpec. */
        interface ILaunchPlanSpec {

            /** LaunchPlanSpec workflowUrn */
            workflowUrn?: (string|null);

            /** LaunchPlanSpec entityMetadata */
            entityMetadata?: (flyteidl.admin.ILaunchPlanMetadata|null);

            /** LaunchPlanSpec defaultInputs */
            defaultInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanSpec fixedInputs */
            fixedInputs?: (flyteidl.core.ILiteralMap|null);
        }

        /** Represents a LaunchPlanSpec. */
        class LaunchPlanSpec implements ILaunchPlanSpec {

            /**
             * Constructs a new LaunchPlanSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanSpec);

            /** LaunchPlanSpec workflowUrn. */
            public workflowUrn: string;

            /** LaunchPlanSpec entityMetadata. */
            public entityMetadata?: (flyteidl.admin.ILaunchPlanMetadata|null);

            /** LaunchPlanSpec defaultInputs. */
            public defaultInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanSpec fixedInputs. */
            public fixedInputs?: (flyteidl.core.ILiteralMap|null);

            /**
             * Creates a new LaunchPlanSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanSpec instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanSpec): flyteidl.admin.LaunchPlanSpec;

            /**
             * Encodes the specified LaunchPlanSpec message. Does not implicitly {@link flyteidl.admin.LaunchPlanSpec.verify|verify} messages.
             * @param message LaunchPlanSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanSpec;

            /**
             * Verifies a LaunchPlanSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanClosure. */
        interface ILaunchPlanClosure {

            /** LaunchPlanClosure state */
            state?: (flyteidl.admin.LaunchPlanState|null);

            /** LaunchPlanClosure expectedInputs */
            expectedInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanClosure expectedOutputs */
            expectedOutputs?: (flyteidl.core.IVariableMap|null);
        }

        /** Represents a LaunchPlanClosure. */
        class LaunchPlanClosure implements ILaunchPlanClosure {

            /**
             * Constructs a new LaunchPlanClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanClosure);

            /** LaunchPlanClosure state. */
            public state: flyteidl.admin.LaunchPlanState;

            /** LaunchPlanClosure expectedInputs. */
            public expectedInputs?: (flyteidl.core.IParameterMap|null);

            /** LaunchPlanClosure expectedOutputs. */
            public expectedOutputs?: (flyteidl.core.IVariableMap|null);

            /**
             * Creates a new LaunchPlanClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanClosure instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanClosure): flyteidl.admin.LaunchPlanClosure;

            /**
             * Encodes the specified LaunchPlanClosure message. Does not implicitly {@link flyteidl.admin.LaunchPlanClosure.verify|verify} messages.
             * @param message LaunchPlanClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanClosure;

            /**
             * Verifies a LaunchPlanClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a LaunchPlanMetadata. */
        interface ILaunchPlanMetadata {

            /** LaunchPlanMetadata schedule */
            schedule?: (flyteidl.admin.ISchedule|null);

            /** LaunchPlanMetadata notifications */
            notifications?: (flyteidl.admin.INotification[]|null);
        }

        /** Represents a LaunchPlanMetadata. */
        class LaunchPlanMetadata implements ILaunchPlanMetadata {

            /**
             * Constructs a new LaunchPlanMetadata.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ILaunchPlanMetadata);

            /** LaunchPlanMetadata schedule. */
            public schedule?: (flyteidl.admin.ISchedule|null);

            /** LaunchPlanMetadata notifications. */
            public notifications: flyteidl.admin.INotification[];

            /**
             * Creates a new LaunchPlanMetadata instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LaunchPlanMetadata instance
             */
            public static create(properties?: flyteidl.admin.ILaunchPlanMetadata): flyteidl.admin.LaunchPlanMetadata;

            /**
             * Encodes the specified LaunchPlanMetadata message. Does not implicitly {@link flyteidl.admin.LaunchPlanMetadata.verify|verify} messages.
             * @param message LaunchPlanMetadata message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ILaunchPlanMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LaunchPlanMetadata message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LaunchPlanMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.LaunchPlanMetadata;

            /**
             * Verifies a LaunchPlanMetadata message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Schedule. */
        interface ISchedule {

            /** Schedule cronExpression */
            cronExpression?: (string|null);

            /** Schedule fixedRate */
            fixedRate?: (flyteidl.admin.Schedule.IFixedRate|null);

            /** Schedule kickoffTimeInputArg */
            kickoffTimeInputArg?: (string|null);
        }

        /** Represents a Schedule. */
        class Schedule implements ISchedule {

            /**
             * Constructs a new Schedule.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ISchedule);

            /** Schedule cronExpression. */
            public cronExpression: string;

            /** Schedule fixedRate. */
            public fixedRate?: (flyteidl.admin.Schedule.IFixedRate|null);

            /** Schedule kickoffTimeInputArg. */
            public kickoffTimeInputArg: string;

            /** Schedule ScheduleExpression. */
            public ScheduleExpression?: ("cronExpression"|"fixedRate");

            /**
             * Creates a new Schedule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Schedule instance
             */
            public static create(properties?: flyteidl.admin.ISchedule): flyteidl.admin.Schedule;

            /**
             * Encodes the specified Schedule message. Does not implicitly {@link flyteidl.admin.Schedule.verify|verify} messages.
             * @param message Schedule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Schedule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Schedule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Schedule;

            /**
             * Verifies a Schedule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace Schedule {

            /** FixedRateUnit enum. */
            enum FixedRateUnit {
                MINUTE = 0,
                HOUR = 1,
                DAY = 2
            }

            /** Properties of a FixedRate. */
            interface IFixedRate {

                /** FixedRate value */
                value?: (number|null);

                /** FixedRate unit */
                unit?: (flyteidl.admin.Schedule.FixedRateUnit|null);
            }

            /** Represents a FixedRate. */
            class FixedRate implements IFixedRate {

                /**
                 * Constructs a new FixedRate.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: flyteidl.admin.Schedule.IFixedRate);

                /** FixedRate value. */
                public value: number;

                /** FixedRate unit. */
                public unit: flyteidl.admin.Schedule.FixedRateUnit;

                /**
                 * Creates a new FixedRate instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FixedRate instance
                 */
                public static create(properties?: flyteidl.admin.Schedule.IFixedRate): flyteidl.admin.Schedule.FixedRate;

                /**
                 * Encodes the specified FixedRate message. Does not implicitly {@link flyteidl.admin.Schedule.FixedRate.verify|verify} messages.
                 * @param message FixedRate message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: flyteidl.admin.Schedule.IFixedRate, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FixedRate message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FixedRate
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Schedule.FixedRate;

                /**
                 * Verifies a FixedRate message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a NodeExecutionEventRequest. */
        interface INodeExecutionEventRequest {

            /** NodeExecutionEventRequest executionId */
            executionId?: (string|null);

            /** NodeExecutionEventRequest eventId */
            eventId?: (string|null);

            /** NodeExecutionEventRequest result */
            result?: (flyteidl.admin.INodeExecutionStatus|null);

            /** NodeExecutionEventRequest spec */
            spec?: (flyteidl.admin.INodeExecutionSpec|null);
        }

        /** Represents a NodeExecutionEventRequest. */
        class NodeExecutionEventRequest implements INodeExecutionEventRequest {

            /**
             * Constructs a new NodeExecutionEventRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionEventRequest);

            /** NodeExecutionEventRequest executionId. */
            public executionId: string;

            /** NodeExecutionEventRequest eventId. */
            public eventId: string;

            /** NodeExecutionEventRequest result. */
            public result?: (flyteidl.admin.INodeExecutionStatus|null);

            /** NodeExecutionEventRequest spec. */
            public spec?: (flyteidl.admin.INodeExecutionSpec|null);

            /**
             * Creates a new NodeExecutionEventRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionEventRequest instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionEventRequest): flyteidl.admin.NodeExecutionEventRequest;

            /**
             * Encodes the specified NodeExecutionEventRequest message. Does not implicitly {@link flyteidl.admin.NodeExecutionEventRequest.verify|verify} messages.
             * @param message NodeExecutionEventRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionEventRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionEventRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionEventRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionEventRequest;

            /**
             * Verifies a NodeExecutionEventRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionEventResponse. */
        interface INodeExecutionEventResponse {
        }

        /** Represents a NodeExecutionEventResponse. */
        class NodeExecutionEventResponse implements INodeExecutionEventResponse {

            /**
             * Constructs a new NodeExecutionEventResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionEventResponse);

            /**
             * Creates a new NodeExecutionEventResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionEventResponse instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionEventResponse): flyteidl.admin.NodeExecutionEventResponse;

            /**
             * Encodes the specified NodeExecutionEventResponse message. Does not implicitly {@link flyteidl.admin.NodeExecutionEventResponse.verify|verify} messages.
             * @param message NodeExecutionEventResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionEventResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionEventResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionEventResponse;

            /**
             * Verifies a NodeExecutionEventResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecution. */
        interface INodeExecution {

            /** NodeExecution executionId */
            executionId?: (string|null);

            /** NodeExecution results */
            results?: (flyteidl.admin.INodeExecutionStatus[]|null);

            /** NodeExecution spec */
            spec?: (flyteidl.admin.INodeExecutionSpec|null);
        }

        /** Represents a NodeExecution. */
        class NodeExecution implements INodeExecution {

            /**
             * Constructs a new NodeExecution.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecution);

            /** NodeExecution executionId. */
            public executionId: string;

            /** NodeExecution results. */
            public results: flyteidl.admin.INodeExecutionStatus[];

            /** NodeExecution spec. */
            public spec?: (flyteidl.admin.INodeExecutionSpec|null);

            /**
             * Creates a new NodeExecution instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecution instance
             */
            public static create(properties?: flyteidl.admin.INodeExecution): flyteidl.admin.NodeExecution;

            /**
             * Encodes the specified NodeExecution message. Does not implicitly {@link flyteidl.admin.NodeExecution.verify|verify} messages.
             * @param message NodeExecution message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecution, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecution message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecution;

            /**
             * Verifies a NodeExecution message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionList. */
        interface INodeExecutionList {

            /** NodeExecutionList executions */
            executions?: (flyteidl.admin.INodeExecution[]|null);
        }

        /** Represents a NodeExecutionList. */
        class NodeExecutionList implements INodeExecutionList {

            /**
             * Constructs a new NodeExecutionList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionList);

            /** NodeExecutionList executions. */
            public executions: flyteidl.admin.INodeExecution[];

            /**
             * Creates a new NodeExecutionList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionList instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionList): flyteidl.admin.NodeExecutionList;

            /**
             * Encodes the specified NodeExecutionList message. Does not implicitly {@link flyteidl.admin.NodeExecutionList.verify|verify} messages.
             * @param message NodeExecutionList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionList;

            /**
             * Verifies a NodeExecutionList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionStatus. */
        interface INodeExecutionStatus {

            /** NodeExecutionStatus phase */
            phase?: (flyteidl.admin.ExecutionPhase|null);

            /** NodeExecutionStatus duration */
            duration?: (google.protobuf.IDuration|null);

            /** NodeExecutionStatus discoveryHit */
            discoveryHit?: (boolean|null);

            /** NodeExecutionStatus retryAttempt */
            retryAttempt?: (number|null);

            /** NodeExecutionStatus isSubTaskAvailable */
            isSubTaskAvailable?: (boolean|null);

            /** NodeExecutionStatus customTaskInfo */
            customTaskInfo?: (Uint8Array|null);

            /** NodeExecutionStatus outputUrl */
            outputUrl?: (string|null);

            /** NodeExecutionStatus error */
            error?: (flyteidl.admin.IError|null);
        }

        /** Represents a NodeExecutionStatus. */
        class NodeExecutionStatus implements INodeExecutionStatus {

            /**
             * Constructs a new NodeExecutionStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionStatus);

            /** NodeExecutionStatus phase. */
            public phase: flyteidl.admin.ExecutionPhase;

            /** NodeExecutionStatus duration. */
            public duration?: (google.protobuf.IDuration|null);

            /** NodeExecutionStatus discoveryHit. */
            public discoveryHit: boolean;

            /** NodeExecutionStatus retryAttempt. */
            public retryAttempt: number;

            /** NodeExecutionStatus isSubTaskAvailable. */
            public isSubTaskAvailable: boolean;

            /** NodeExecutionStatus customTaskInfo. */
            public customTaskInfo: Uint8Array;

            /** NodeExecutionStatus outputUrl. */
            public outputUrl: string;

            /** NodeExecutionStatus error. */
            public error?: (flyteidl.admin.IError|null);

            /** NodeExecutionStatus outputResult. */
            public outputResult?: ("outputUrl"|"error");

            /**
             * Creates a new NodeExecutionStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionStatus instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionStatus): flyteidl.admin.NodeExecutionStatus;

            /**
             * Encodes the specified NodeExecutionStatus message. Does not implicitly {@link flyteidl.admin.NodeExecutionStatus.verify|verify} messages.
             * @param message NodeExecutionStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionStatus;

            /**
             * Verifies a NodeExecutionStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a NodeExecutionSpec. */
        interface INodeExecutionSpec {

            /** NodeExecutionSpec nodeId */
            nodeId?: (string|null);

            /** NodeExecutionSpec inputs */
            inputs?: (flyteidl.core.ILiteralMap|null);
        }

        /** Represents a NodeExecutionSpec. */
        class NodeExecutionSpec implements INodeExecutionSpec {

            /**
             * Constructs a new NodeExecutionSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.INodeExecutionSpec);

            /** NodeExecutionSpec nodeId. */
            public nodeId: string;

            /** NodeExecutionSpec inputs. */
            public inputs?: (flyteidl.core.ILiteralMap|null);

            /**
             * Creates a new NodeExecutionSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeExecutionSpec instance
             */
            public static create(properties?: flyteidl.admin.INodeExecutionSpec): flyteidl.admin.NodeExecutionSpec;

            /**
             * Encodes the specified NodeExecutionSpec message. Does not implicitly {@link flyteidl.admin.NodeExecutionSpec.verify|verify} messages.
             * @param message NodeExecutionSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.INodeExecutionSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeExecutionSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeExecutionSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.NodeExecutionSpec;

            /**
             * Verifies a NodeExecutionSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskCreateRequest. */
        interface ITaskCreateRequest {

            /** TaskCreateRequest id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** TaskCreateRequest version */
            version?: (string|null);

            /** TaskCreateRequest spec */
            spec?: (flyteidl.admin.ITaskSpec|null);
        }

        /** Represents a TaskCreateRequest. */
        class TaskCreateRequest implements ITaskCreateRequest {

            /**
             * Constructs a new TaskCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskCreateRequest);

            /** TaskCreateRequest id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** TaskCreateRequest version. */
            public version: string;

            /** TaskCreateRequest spec. */
            public spec?: (flyteidl.admin.ITaskSpec|null);

            /**
             * Creates a new TaskCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.ITaskCreateRequest): flyteidl.admin.TaskCreateRequest;

            /**
             * Encodes the specified TaskCreateRequest message. Does not implicitly {@link flyteidl.admin.TaskCreateRequest.verify|verify} messages.
             * @param message TaskCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskCreateRequest;

            /**
             * Verifies a TaskCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskCreateResponse. */
        interface ITaskCreateResponse {

            /** TaskCreateResponse urn */
            urn?: (string|null);
        }

        /** Represents a TaskCreateResponse. */
        class TaskCreateResponse implements ITaskCreateResponse {

            /**
             * Constructs a new TaskCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskCreateResponse);

            /** TaskCreateResponse urn. */
            public urn: string;

            /**
             * Creates a new TaskCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.ITaskCreateResponse): flyteidl.admin.TaskCreateResponse;

            /**
             * Encodes the specified TaskCreateResponse message. Does not implicitly {@link flyteidl.admin.TaskCreateResponse.verify|verify} messages.
             * @param message TaskCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskCreateResponse;

            /**
             * Verifies a TaskCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Task. */
        interface ITask {

            /** Task id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** Task version */
            version?: (string|null);

            /** Task urn */
            urn?: (string|null);

            /** Task closure */
            closure?: (flyteidl.admin.ITaskClosure|null);
        }

        /** Represents a Task. */
        class Task implements ITask {

            /**
             * Constructs a new Task.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITask);

            /** Task id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** Task version. */
            public version: string;

            /** Task urn. */
            public urn: string;

            /** Task closure. */
            public closure?: (flyteidl.admin.ITaskClosure|null);

            /**
             * Creates a new Task instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Task instance
             */
            public static create(properties?: flyteidl.admin.ITask): flyteidl.admin.Task;

            /**
             * Encodes the specified Task message. Does not implicitly {@link flyteidl.admin.Task.verify|verify} messages.
             * @param message Task message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Task message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Task
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Task;

            /**
             * Verifies a Task message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskList. */
        interface ITaskList {

            /** TaskList tasks */
            tasks?: (flyteidl.admin.ITask[]|null);
        }

        /** Represents a TaskList. */
        class TaskList implements ITaskList {

            /**
             * Constructs a new TaskList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskList);

            /** TaskList tasks. */
            public tasks: flyteidl.admin.ITask[];

            /**
             * Creates a new TaskList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskList instance
             */
            public static create(properties?: flyteidl.admin.ITaskList): flyteidl.admin.TaskList;

            /**
             * Encodes the specified TaskList message. Does not implicitly {@link flyteidl.admin.TaskList.verify|verify} messages.
             * @param message TaskList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskList;

            /**
             * Verifies a TaskList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskSpec. */
        interface ITaskSpec {

            /** TaskSpec template */
            template?: (flyteidl.core.ITaskTemplate|null);
        }

        /** Represents a TaskSpec. */
        class TaskSpec implements ITaskSpec {

            /**
             * Constructs a new TaskSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskSpec);

            /** TaskSpec template. */
            public template?: (flyteidl.core.ITaskTemplate|null);

            /**
             * Creates a new TaskSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskSpec instance
             */
            public static create(properties?: flyteidl.admin.ITaskSpec): flyteidl.admin.TaskSpec;

            /**
             * Encodes the specified TaskSpec message. Does not implicitly {@link flyteidl.admin.TaskSpec.verify|verify} messages.
             * @param message TaskSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskSpec;

            /**
             * Verifies a TaskSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a TaskClosure. */
        interface ITaskClosure {

            /** TaskClosure compiledTask */
            compiledTask?: (flyteidl.core.ICompiledTask|null);
        }

        /** Represents a TaskClosure. */
        class TaskClosure implements ITaskClosure {

            /**
             * Constructs a new TaskClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.ITaskClosure);

            /** TaskClosure compiledTask. */
            public compiledTask?: (flyteidl.core.ICompiledTask|null);

            /**
             * Creates a new TaskClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TaskClosure instance
             */
            public static create(properties?: flyteidl.admin.ITaskClosure): flyteidl.admin.TaskClosure;

            /**
             * Encodes the specified TaskClosure message. Does not implicitly {@link flyteidl.admin.TaskClosure.verify|verify} messages.
             * @param message TaskClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.ITaskClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TaskClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TaskClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.TaskClosure;

            /**
             * Verifies a TaskClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowCreateRequest. */
        interface IWorkflowCreateRequest {

            /** WorkflowCreateRequest id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** WorkflowCreateRequest version */
            version?: (string|null);

            /** WorkflowCreateRequest spec */
            spec?: (flyteidl.admin.IWorkflowSpec|null);
        }

        /** Represents a WorkflowCreateRequest. */
        class WorkflowCreateRequest implements IWorkflowCreateRequest {

            /**
             * Constructs a new WorkflowCreateRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowCreateRequest);

            /** WorkflowCreateRequest id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** WorkflowCreateRequest version. */
            public version: string;

            /** WorkflowCreateRequest spec. */
            public spec?: (flyteidl.admin.IWorkflowSpec|null);

            /**
             * Creates a new WorkflowCreateRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowCreateRequest instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowCreateRequest): flyteidl.admin.WorkflowCreateRequest;

            /**
             * Encodes the specified WorkflowCreateRequest message. Does not implicitly {@link flyteidl.admin.WorkflowCreateRequest.verify|verify} messages.
             * @param message WorkflowCreateRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowCreateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowCreateRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowCreateRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowCreateRequest;

            /**
             * Verifies a WorkflowCreateRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowCreateResponse. */
        interface IWorkflowCreateResponse {

            /** WorkflowCreateResponse urn */
            urn?: (string|null);
        }

        /** Represents a WorkflowCreateResponse. */
        class WorkflowCreateResponse implements IWorkflowCreateResponse {

            /**
             * Constructs a new WorkflowCreateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowCreateResponse);

            /** WorkflowCreateResponse urn. */
            public urn: string;

            /**
             * Creates a new WorkflowCreateResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowCreateResponse instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowCreateResponse): flyteidl.admin.WorkflowCreateResponse;

            /**
             * Encodes the specified WorkflowCreateResponse message. Does not implicitly {@link flyteidl.admin.WorkflowCreateResponse.verify|verify} messages.
             * @param message WorkflowCreateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowCreateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowCreateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowCreateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowCreateResponse;

            /**
             * Verifies a WorkflowCreateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Workflow. */
        interface IWorkflow {

            /** Workflow id */
            id?: (flyteidl.admin.IIdentifier|null);

            /** Workflow version */
            version?: (string|null);

            /** Workflow urn */
            urn?: (string|null);

            /** Workflow closure */
            closure?: (flyteidl.admin.IWorkflowClosure|null);
        }

        /** Represents a Workflow. */
        class Workflow implements IWorkflow {

            /**
             * Constructs a new Workflow.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflow);

            /** Workflow id. */
            public id?: (flyteidl.admin.IIdentifier|null);

            /** Workflow version. */
            public version: string;

            /** Workflow urn. */
            public urn: string;

            /** Workflow closure. */
            public closure?: (flyteidl.admin.IWorkflowClosure|null);

            /**
             * Creates a new Workflow instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Workflow instance
             */
            public static create(properties?: flyteidl.admin.IWorkflow): flyteidl.admin.Workflow;

            /**
             * Encodes the specified Workflow message. Does not implicitly {@link flyteidl.admin.Workflow.verify|verify} messages.
             * @param message Workflow message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflow, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Workflow message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Workflow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.Workflow;

            /**
             * Verifies a Workflow message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowList. */
        interface IWorkflowList {

            /** WorkflowList workflows */
            workflows?: (flyteidl.admin.IWorkflow[]|null);
        }

        /** Represents a WorkflowList. */
        class WorkflowList implements IWorkflowList {

            /**
             * Constructs a new WorkflowList.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowList);

            /** WorkflowList workflows. */
            public workflows: flyteidl.admin.IWorkflow[];

            /**
             * Creates a new WorkflowList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowList instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowList): flyteidl.admin.WorkflowList;

            /**
             * Encodes the specified WorkflowList message. Does not implicitly {@link flyteidl.admin.WorkflowList.verify|verify} messages.
             * @param message WorkflowList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowList;

            /**
             * Verifies a WorkflowList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowSpec. */
        interface IWorkflowSpec {

            /** WorkflowSpec template */
            template?: (flyteidl.core.IWorkflowTemplate|null);
        }

        /** Represents a WorkflowSpec. */
        class WorkflowSpec implements IWorkflowSpec {

            /**
             * Constructs a new WorkflowSpec.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowSpec);

            /** WorkflowSpec template. */
            public template?: (flyteidl.core.IWorkflowTemplate|null);

            /**
             * Creates a new WorkflowSpec instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowSpec instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowSpec): flyteidl.admin.WorkflowSpec;

            /**
             * Encodes the specified WorkflowSpec message. Does not implicitly {@link flyteidl.admin.WorkflowSpec.verify|verify} messages.
             * @param message WorkflowSpec message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowSpec, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowSpec message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowSpec
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowSpec;

            /**
             * Verifies a WorkflowSpec message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a WorkflowClosure. */
        interface IWorkflowClosure {

            /** WorkflowClosure compiledWorkflow */
            compiledWorkflow?: (flyteidl.core.ICompiledWorkflowClosure|null);
        }

        /** Represents a WorkflowClosure. */
        class WorkflowClosure implements IWorkflowClosure {

            /**
             * Constructs a new WorkflowClosure.
             * @param [properties] Properties to set
             */
            constructor(properties?: flyteidl.admin.IWorkflowClosure);

            /** WorkflowClosure compiledWorkflow. */
            public compiledWorkflow?: (flyteidl.core.ICompiledWorkflowClosure|null);

            /**
             * Creates a new WorkflowClosure instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WorkflowClosure instance
             */
            public static create(properties?: flyteidl.admin.IWorkflowClosure): flyteidl.admin.WorkflowClosure;

            /**
             * Encodes the specified WorkflowClosure message. Does not implicitly {@link flyteidl.admin.WorkflowClosure.verify|verify} messages.
             * @param message WorkflowClosure message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: flyteidl.admin.IWorkflowClosure, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WorkflowClosure message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WorkflowClosure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): flyteidl.admin.WorkflowClosure;

            /**
             * Verifies a WorkflowClosure message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }

    /** Namespace service. */
    namespace service {

        /** Represents an AdminService */
        class AdminService extends $protobuf.rpc.Service {

            /**
             * Constructs a new AdminService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new AdminService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AdminService;

            /**
             * Calls CreateTask.
             * @param request TaskCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskCreateResponse
             */
            public createTask(request: flyteidl.admin.ITaskCreateRequest, callback: flyteidl.service.AdminService.CreateTaskCallback): void;

            /**
             * Calls CreateTask.
             * @param request TaskCreateRequest message or plain object
             * @returns Promise
             */
            public createTask(request: flyteidl.admin.ITaskCreateRequest): Promise<flyteidl.admin.TaskCreateResponse>;

            /**
             * Calls GetTask.
             * @param request ObjectGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Task
             */
            public getTask(request: flyteidl.admin.IObjectGetRequest, callback: flyteidl.service.AdminService.GetTaskCallback): void;

            /**
             * Calls GetTask.
             * @param request ObjectGetRequest message or plain object
             * @returns Promise
             */
            public getTask(request: flyteidl.admin.IObjectGetRequest): Promise<flyteidl.admin.Task>;

            /**
             * Calls ListTaskIds.
             * @param request IdentifierListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and IdentifierList
             */
            public listTaskIds(request: flyteidl.admin.IIdentifierListRequest, callback: flyteidl.service.AdminService.ListTaskIdsCallback): void;

            /**
             * Calls ListTaskIds.
             * @param request IdentifierListRequest message or plain object
             * @returns Promise
             */
            public listTaskIds(request: flyteidl.admin.IIdentifierListRequest): Promise<flyteidl.admin.IdentifierList>;

            /**
             * Calls ListTasks.
             * @param request ResourceListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and TaskList
             */
            public listTasks(request: flyteidl.admin.IResourceListRequest, callback: flyteidl.service.AdminService.ListTasksCallback): void;

            /**
             * Calls ListTasks.
             * @param request ResourceListRequest message or plain object
             * @returns Promise
             */
            public listTasks(request: flyteidl.admin.IResourceListRequest): Promise<flyteidl.admin.TaskList>;

            /**
             * Calls CreateWorkflow.
             * @param request WorkflowCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowCreateResponse
             */
            public createWorkflow(request: flyteidl.admin.IWorkflowCreateRequest, callback: flyteidl.service.AdminService.CreateWorkflowCallback): void;

            /**
             * Calls CreateWorkflow.
             * @param request WorkflowCreateRequest message or plain object
             * @returns Promise
             */
            public createWorkflow(request: flyteidl.admin.IWorkflowCreateRequest): Promise<flyteidl.admin.WorkflowCreateResponse>;

            /**
             * Calls GetWorkflow.
             * @param request ObjectGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Workflow
             */
            public getWorkflow(request: flyteidl.admin.IObjectGetRequest, callback: flyteidl.service.AdminService.GetWorkflowCallback): void;

            /**
             * Calls GetWorkflow.
             * @param request ObjectGetRequest message or plain object
             * @returns Promise
             */
            public getWorkflow(request: flyteidl.admin.IObjectGetRequest): Promise<flyteidl.admin.Workflow>;

            /**
             * Calls ListWorkflowIds.
             * @param request IdentifierListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and IdentifierList
             */
            public listWorkflowIds(request: flyteidl.admin.IIdentifierListRequest, callback: flyteidl.service.AdminService.ListWorkflowIdsCallback): void;

            /**
             * Calls ListWorkflowIds.
             * @param request IdentifierListRequest message or plain object
             * @returns Promise
             */
            public listWorkflowIds(request: flyteidl.admin.IIdentifierListRequest): Promise<flyteidl.admin.IdentifierList>;

            /**
             * Calls ListWorkflows.
             * @param request ResourceListRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and WorkflowList
             */
            public listWorkflows(request: flyteidl.admin.IResourceListRequest, callback: flyteidl.service.AdminService.ListWorkflowsCallback): void;

            /**
             * Calls ListWorkflows.
             * @param request ResourceListRequest message or plain object
             * @returns Promise
             */
            public listWorkflows(request: flyteidl.admin.IResourceListRequest): Promise<flyteidl.admin.WorkflowList>;

            /**
             * Calls CreateLaunchPlan.
             * @param request LaunchPlanCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlanCreateResponse
             */
            public createLaunchPlan(request: flyteidl.admin.ILaunchPlanCreateRequest, callback: flyteidl.service.AdminService.CreateLaunchPlanCallback): void;

            /**
             * Calls CreateLaunchPlan.
             * @param request LaunchPlanCreateRequest message or plain object
             * @returns Promise
             */
            public createLaunchPlan(request: flyteidl.admin.ILaunchPlanCreateRequest): Promise<flyteidl.admin.LaunchPlanCreateResponse>;

            /**
             * Calls GetLaunchPlan.
             * @param request ObjectGetRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and LaunchPlan
             */
            public getLaunchPlan(request: flyteidl.admin.IObjectGetRequest, callback: flyteidl.service.AdminService.GetLaunchPlanCallback): void;

            /**
             * Calls GetLaunchPlan.
             * @param request ObjectGetRequest message or plain object
             * @returns Promise
             */
            public getLaunchPlan(request: flyteidl.admin.IObjectGetRequest): Promise<flyteidl.admin.LaunchPlan>;

            /**
             * Calls CreateExecution.
             * @param request ExecutionCreateRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ExecutionCreateResponse
             */
            public createExecution(request: flyteidl.admin.IExecutionCreateRequest, callback: flyteidl.service.AdminService.CreateExecutionCallback): void;

            /**
             * Calls CreateExecution.
             * @param request ExecutionCreateRequest message or plain object
             * @returns Promise
             */
            public createExecution(request: flyteidl.admin.IExecutionCreateRequest): Promise<flyteidl.admin.ExecutionCreateResponse>;
        }

        namespace AdminService {

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createTask}.
             * @param error Error, if any
             * @param [response] TaskCreateResponse
             */
            type CreateTaskCallback = (error: (Error|null), response?: flyteidl.admin.TaskCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getTask}.
             * @param error Error, if any
             * @param [response] Task
             */
            type GetTaskCallback = (error: (Error|null), response?: flyteidl.admin.Task) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTaskIds}.
             * @param error Error, if any
             * @param [response] IdentifierList
             */
            type ListTaskIdsCallback = (error: (Error|null), response?: flyteidl.admin.IdentifierList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listTasks}.
             * @param error Error, if any
             * @param [response] TaskList
             */
            type ListTasksCallback = (error: (Error|null), response?: flyteidl.admin.TaskList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createWorkflow}.
             * @param error Error, if any
             * @param [response] WorkflowCreateResponse
             */
            type CreateWorkflowCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getWorkflow}.
             * @param error Error, if any
             * @param [response] Workflow
             */
            type GetWorkflowCallback = (error: (Error|null), response?: flyteidl.admin.Workflow) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listWorkflowIds}.
             * @param error Error, if any
             * @param [response] IdentifierList
             */
            type ListWorkflowIdsCallback = (error: (Error|null), response?: flyteidl.admin.IdentifierList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#listWorkflows}.
             * @param error Error, if any
             * @param [response] WorkflowList
             */
            type ListWorkflowsCallback = (error: (Error|null), response?: flyteidl.admin.WorkflowList) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createLaunchPlan}.
             * @param error Error, if any
             * @param [response] LaunchPlanCreateResponse
             */
            type CreateLaunchPlanCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlanCreateResponse) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#getLaunchPlan}.
             * @param error Error, if any
             * @param [response] LaunchPlan
             */
            type GetLaunchPlanCallback = (error: (Error|null), response?: flyteidl.admin.LaunchPlan) => void;

            /**
             * Callback as used by {@link flyteidl.service.AdminService#createExecution}.
             * @param error Error, if any
             * @param [response] ExecutionCreateResponse
             */
            type CreateExecutionCallback = (error: (Error|null), response?: flyteidl.admin.ExecutionCreateResponse) => void;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: Long;

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: Long;

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: Long;

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }
}
